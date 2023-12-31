/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// import {
//   // createUserWithEmailAndPassword,
//   // getAuth,
//   // onAuthStateChanged,
//   // signInWithEmailAndPassword,
//   // signOut,
// } from "firebase/auth";
// import app from "../firebase/firebase.config";
export const Authcontext = createContext(null);
// const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null);
  const [userID, setuserID] = useState(null);
  // const [loading, setLoading] = useState(true);
  // create account
  const userRegistration = async (name, email, password, role) => {
    const credentials = {
      name,
      email,
      password,
      role,
    };
    console.log(credentials);
    const users = await fetch('http://localhost:3001/auth/signUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json(data))
      .then((data) => {
        console.log(data);
        // setUser(data.email);
        // setRole(data.role);
      });
  };
  // login account
  const listGenerate = () => {
    let list1 = [];
    fetch(`http://localhost:3001/auth/all`)
      .then((data) => data.json())
      .then((data) => {
        data.map((d) => {
          list1.push(d.name);
        });
      });
    fetch(`http://localhost:3001/course`)
      .then((data) => data.json())
      .then((data) => {
        data.map((d) => {
          list1.push(d.courseName);
        });
        localStorage.setItem('list', JSON.stringify(list1));
        // console.log(JSON.parse(list1));
        console.log('After', JSON.pharse(localStorage.getItem('list')));
      });
    // console.log('Pg', list1);
    // let obj = Object.assign({}, list1);
    // console.log('Pg', obj, JSON.stringify(obj));
    // console.log('Pg', JSON.stringify(list1));
    // localStorage.list = JSON.stringify(list1.data);
  };
  const userLogin = async (email, password) => {
    console.log(email, password);
    // setUser(email);
    const credentials = {
      email,
      password,
    };
    const users = await fetch(`http://localhost:3001/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json(data))
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res[0]));
        // console.log('fun',res[0]);
        setuserID(res[0].id);
        setUser(res[0].name);
        setEmail(res[0].email);
        setRole(res[0].role);
        // setRole('Admin');
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
        });
      })
      .catch((err) => {
        console.log('Err', err);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: "Email/Password doesn't match",
        });
      });
    const Allusers = await fetch(`http://localhost:3001/auth/all`)
      .then((data) => data.json())
      .then((data) => {
        console.log('All user', data);
        localStorage.setItem('allUser', JSON.stringify(data));
      });
  };
  // sign out
  const userSignOut = () => {
    setEmail('');
    setUser('');
    setuserID('');
    setRole('');
  };

  // useEffect(() => {
  //   const unsubscrive = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => {
  //     unsubscrive();
  //   };
  // }, []);
  // setRole('Admin');
  // const role = "Student";
  // const role = 'Admin';
  // const role = "Instructor";
  const data = {
    userRegistration,
    userSignOut,
    userLogin,
    userID,
    user,
    email,
    listGenerate,
    // loading,
    role,
  };
  return <Authcontext.Provider value={data}>{children}</Authcontext.Provider>;
};

export default Authprovider;
