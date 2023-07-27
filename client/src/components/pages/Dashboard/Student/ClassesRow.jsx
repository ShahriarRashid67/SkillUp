import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const compareDates = (date1, date2) => {
  return new Date(date1) > new Date(date2);
};
const ClassesRow = ({ session }) => {
  const { id, mentorID, mentorStatus, paymentStatus, roomID, day } = session;
  const [mentor, setMentor] = useState('');
  const [mentorEmail, setMentorEmail] = useState('');
  
  const today = new Date();
  const end = new Date(day);
  end.setHours(end.getHours() + 1);
  console.log("Old",day);
  console.log("Added", end);
  console.log("Month", end.getMonth());
  useEffect(() => {
    if (!mentor && mentorID) {
      const cred = {
        id:mentorID
      }
      fetch('http://localhost:3001/auth/info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cred)
      }).then((data) => data.json())
        .then((data) => {
          if (!data.error) {
            console.log('Mentor Data', data[0].name)
            setMentor(data[0].name);
            setMentorEmail(data[0].email);
          }
            
        });
    }
  })
  // https://demo.mobiscroll.com/react/calendar/usage-on-input-or-inline#
  
  // const [session, setSession] = useState([]);
  // const [sessionId, setSessionId] = useState([]);
  // const [mentor, setMentor] = useState('A');
  // const []
  // useEffect(() => {
  //   setSessionId(data.data);
  //   const cred = {
  //     id: data.data,
  //   };
  //   console.log('Cred', data.data);
  //   {
  //     sessionId &&
  //       fetch(`http://localhost:3001/sessions/id`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(cred)
  //     })
  //       .then((da) => da.json())
  //       .then((da) => { console.log(session), setSession(da) })
  //   }
  // }, []);
  

  // useEffect(() => {
  //   const cred = {
  //     id: data.data,
  //   };
  //   {
  //     sessionId &&
  //       fetch(`http://localhost:3001/sessions/id`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(cred)
  //     })
  //       .then((da) => da.json())
  //       .then((da) => { console.log(session), setSession(da) })
  //   }
  // }, []);

  // useEffect(() => {
  //   const cred = {
  //     id: session.mentorID,
  //   };
  //   console.log("Id", cred);
  //   const ok = cred.id === 'undefined';
  //   console.log(ok);
  //   {
  //     sessionId&& ok &&
  //     fetch(`http://localhost:3001/Auth/info`, {
  //       method:'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(cred),
  //     })
  //         .then((data) => data.json(data))
  //       .then((data) => { console.log("mentor", data),setMentor(data.name) })
  //     console.log(mentor);
        
  //   }
        
// }, []);
  // async function getData(info) {
    
  // }
  // function joinRoom() {
  //   <Room session={session}></Room>
  // }
  const navigate = useNavigate();
  const isFuture= compareDates(day,today);
  return (
    <>
      <tr className="border-b border-opacity-20 bg-gray-50">
        <td className="p-3">
          <p>
            {/* {mentor && { mentor }} */}
            {/* { !mentor && mentor} */}
            {id}
          </p>
        </td>

        <td className="p-3">
          <p>{mentor}</p>
          <p className="">{mentorEmail}</p>
        </td>
        <td className="p-3">
          <p>{day}</p>
        </td>
        <td className="p-3">
          <p>
           
          </p>
        </td>

        <td className="p-3">
          {(mentorStatus === 'Pendin') && 'waiting for mentor'}
          {(!paymentStatus) && 
            <span className=" cursor-pointer focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            <span>Pay</span>
          </span>
          }
          
          {isFuture ? "Future" : "past"}
          
          { 
            <Button onClick={ ()=>{navigate('Room',{state:{ from: session }})}}>Join</Button>
            // <Navigate state={{ from: session }} to="Room"></Navigate>
            // <Link to="Room" session={session}>
            //   Join room
            // </Link>
          }
          
          
        </td>
        <td className="p-3">
          <span className=" cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            <span>Delete</span>
          </span>
        </td>
      </tr>
    </>
  );
};

export default ClassesRow;
