import { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../../../provider/Authprovider';
import Swal from 'sweetalert2';
import { Box, Button } from '@mui/material';
import { Badge } from '@mantine/core';
import Waiting from './waiting';
const InstructorProfile = () => {
  // const { role } = useContext(Authcontext);
  const [bio, setBio] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [id, setId] = useState('');
  const [info, setInfo] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [linkedin, setlinkedIn] = useState('');
  const [github, setGithub] = useState('');
  const [hourRate, sethourRate] = useState('');
  const dataUser = JSON.parse(localStorage.getItem('user'));
  const allUser = JSON.parse(localStorage.getItem('allUser'));
  const ind = allUser.findIndex((user) => user.id == dataUser.id);

  const [courseList, setCourseList] = useState([]);
  const [expertList, setexpertList] = useState('');
  const [sCourse, setsCourse] = useState('');

  const addCourse = () => {
    if (expertList.length === 3) {
      Swal.fire({
        icon: 'error',
        title: 'Faild to add course',
        text: 'Maximum limit of course exceeded',
      });
      return;
    }
    const cred = {
      mentorID: dataUser.id,
      course: sCourse,
    };
    console.log('Adding Course');
    fetch(`http://localhost:3001/expert/pending`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cred),
    })
      .then((data) => data.json(data))
      .then((data) => {
        console.log('Added', data);
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
          title: 'Course added for approval',
        });
      });
    fetch(`http://localhost:3001/expert/mentor/${dataUser.id}`)
      .then((data) => data.json(data))
      .then((data) => {
        // const [s, setS] = useState(data);
        setexpertList(data);
      });
    console.log(courseList);
  };
  useEffect(() => {
    fetch(`http://localhost:3001/expert/mentor/${dataUser.id}`)
      .then((data) => data.json(data))
      .then((data) => {
        setexpertList(data);
      });
  }, []);
  const save = () => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        const cred = {
          id,
          hourRate,
          linkedin,
          github,
          title,
          description,
        };
        console.log(cred);
        fetch(`http://localhost:3001/instructor/${dataUser.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cred),
        })
          .then((data) => data.json(data))
          .then((data) => {
            setStatus(data.status),
              setGithub(data.github),
              setTitle(data.title),
              sethourRate(data.hourRate),
              setlinkedIn(data.linkedin);
            setDescription(data.description);
          });
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:3001/course`)
      .then((data) => data.json(data))
      .then((data) => {
        setCourseList(data);
      });
  }, []);

  useEffect(() => {
    console.log(ind);

    if (ind !== -1) {
      console.log('ind', allUser[ind]);
      setBio(allUser[ind]);
      setName(allUser[ind].name);
      setEmail(allUser[ind].email);
      setId(allUser[ind].id);
      fetch(`http://localhost:3001/instructor/${dataUser.id}`)
        .then((data) => data.json(data))
        .then((data) => {
          console.log('Fetched', data.status),
            setStatus(data.status),
            sethourRate(data.hourRate),
            setGithub(data.github),
            setTitle(data.title),
            setlinkedIn(data.linkedin);
          setDescription(data.description);
        });
    }
  }, []);
  return (
    <div>
      {status === 'Pending' && <Waiting></Waiting>}
      {status === 'Approve' && (
        <div className='bg-gray-200 w- shadow-xl mt-8 rounded-xl text-left'>
          <Box>
            <form
              action=''
              noValidate=''
              className='container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid'
            >
              <fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm'>
                <div className='grid grid-cols-6 gap-7 col-span-full'>
                  <h2 className='col-span-full text-xl text-blue-800 font-semibold'>
                    Your Profile
                  </h2>
                  <div className='flex col-span-3'>
                    <label htmlFor='firstname' className='text-lg mt-1.2 mr-3'>
                      Name
                    </label>
                    <input
                      id='name'
                      readOnly
                      type='text'
                      placeholder='Shahriar Rashid'
                      className='h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
                    />
                  </div>
                  <div className='col-span-full flex sm:col-span-2'>
                    <label
                      htmlFor='sellerEmail'
                      className='text-lg mt-1.2 mr-3'
                    >
                      Title
                    </label>
                    <input
                      id='Title'
                      type='text'
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={title ? title : 'Title'}
                      className='w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
                    />
                  </div>
                  <div className='col-span-full flex sm:col-span-2'>
                    <label
                      htmlFor='sellerEmail'
                      className=' text-lg mt-1.2  mr-3'
                    >
                      Email
                    </label>
                    <input
                      readOnly
                      id='Email'
                      type='email'
                      placeholder={dataUser.email}
                      className='w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
                    />
                  </div>
                  <div className='col-span-full flex sm:col-span-2'>
                    <label
                      htmlFor='sellerEmail'
                      className=' text-lg mt-1.2  mr-3'
                    >
                      LinkedIn
                    </label>
                    <input
                      id=''
                      type='url'
                      onChange={(e) => setlinkedIn(e.target.value)}
                      placeholder={
                        linkedin ? linkedin : 'https://linkedin.com/'
                      }
                      className='w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
                    />
                  </div>
                  <div className='col-span-full flex sm:col-span-2'>
                    <label
                      htmlFor='sellerEmail'
                      className=' text-lg mt-1.2  mr-3'
                    >
                      Github
                    </label>
                    <input
                      id=''
                      type='url'
                      onChange={(e) => setGithub(e.target.value)}
                      placeholder={github ? github : 'https://github.com/'}
                      className='w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
                    />
                  </div>
                  <div className='col-span-full flex sm:col-span-2'>
                    <label
                      htmlFor='sellerEmail'
                      className=' text-lg mt-1.2 mr-3'
                    >
                      HourRate
                    </label>
                    <input
                      id=''
                      type='Number'
                      onChange={(e) => sethourRate(e.target.value)}
                      placeholder={hourRate ? hourRate : '0'}
                      className='w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
                    />
                  </div>
                  <div className='col-span-full flex sm:col-span-4'>
                    <label
                      htmlFor='sellerEmail'
                      className=' text-lg mt-1.2 mr-3 w-40'
                    >
                      Add a summary
                    </label>
                    <input
                      id=''
                      type='text'
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={
                        description
                          ? description
                          : 'Write a summary to highlight your personality or work experience'
                      }
                      className='w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
                    />
                  </div>

                  <div className='col-span-full flex sm:col-span-2'>
                    <span className='  text-base  mt-5  px-3'>Addcourse</span>
                    <select
                      onChange={(e) => setsCourse(e.target.value)}
                      className=' p-1 border-2 w-40 rounded-lg border-gray-300 text-gray-700 sm:text-sm'
                    >
                      <option value='' disabled></option>
                      {courseList?.map((item) => (
                        <option key={item.id} value={item.courseName}>
                          {item.courseName}
                        </option>
                      ))}
                    </select>
                    <button
                      type='button'
                      onClick={addCourse}
                      className=' px-5  ml-2  text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
                    >
                      Add
                    </button>
                  </div>
                  <div className=' col-span-3 flex gap-2'>
                    {console.log(Object.keys(expertList))}
                    {Object.keys(expertList) &&
                      expertList.map((elemnt, index) => (
                        <Badge color='indigo' className=' p-4' key={index}>
                          {elemnt.course}
                        </Badge>
                      ))}
                  </div>
                  <br />
                  <div></div>
                  <div className='col-span-full'>Update Password</div>
                  <div className='col-span-full sm:col-span-2'>
                    <label htmlFor='sellerEmail' className=' text-base'>
                      Current Password
                    </label>
                    <input
                      type='password'
                      placeholder='Enter current Password'
                      className='w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
                    />
                  </div>
                  <div className='col-span-full sm:col-span-2'>
                    <label htmlFor='sellerEmail' className='text-base'>
                      Enter new Password
                    </label>
                    <input
                      type='password'
                      placeholder='Enter current Password'
                      className='w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
                    />
                  </div>
                  <div className=' mt-5 w-full text-left mt-2'>
                    <button className='py-2 cursor-pointer px-3 bg-blue-500 text-white rounded transition duration-300'>
                      Update password
                    </button>
                  </div>
                  <div className='col-span-full w-full text-left mt-3'>
                    <input
                      onClick={save}
                      type='submit'
                      value='Save Changes'
                      className='py-2 cursor-pointer px-3 bg-blue-500 text-white rounded transition duration-300'
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </Box>
        </div>
      )}
    </div>
  );
};

export default InstructorProfile;
