import { useEffect, useState } from 'react';
import React from '../../homePage/Classes/React';
import { Button, Rating } from '@mui/material';
import Booking from './Booking';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mantine/core';
const MentorCard = ({ instructor }) => {
  const { id, hourRate, rating, title, img, github, linkedIn } = instructor;
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [expertList, setexpertList] = useState('');

  const [reviews, setReviews] = useState([]);
  const [avgreviews, setavgReviews] = useState(0);
  //   console.log('Booking', allUser);
  //   console.log('From', from);
  const allUser = JSON.parse(localStorage.getItem('allUser'));
  const ind = allUser.findIndex((user) => user.id == id);
  useEffect(() => {
    if (ind !== -1) {
      setName(allUser[ind].name);
      fetch(`http://localhost:3001/instructor/${allUser[ind].id}`)
        .then((data) => data.json(data))
        .then((data) => {
          console.log(data);
          setUser(data);
        });
    }
  }, []);
  useEffect(() => {
    console.log('Id', id);
    fetch(`http://localhost:3001/reviews/${id}`)
      .then((data) => data.json(data))
      .then((data) => {
        console.log('rev', data), setReviews(data);
      });
    let sum = 0;
    reviews.map((elemnt) => (sum += elemnt.star));
    const av = sum / reviews.length;
    setavgReviews(av);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/expert/mentor/${id}`)
      .then((data) => data.json(data))
      .then((data) => {
        setexpertList(data);
      });
  }, []);

  // useEffect(() => {
  //   const cred: {
  //     id : id;
  //   }
  //   fetch(`http://localhost:3001/auth/info`)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setUser(data);
  //     });
  //   // console.log(course);
  // }, []);
  let im = Math.floor(Math.random() * 8);
  let pat = '../../../../../public/' + im + '.png';
  console.log(pat);

  const navigate = useNavigate();
  return (
    <>
      {
        <div>
          <div className='flex flex-col justify-center max-w-xs  pt-6 pb-6 hover:scale-105  shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100'>
            <img
              src={pat}
              alt=''
              className='w-16 h-16 mx-auto rounded-full dark:bg-gray-500 aspect-square'
            />
            <div className='space-y-4 text-center divide-y divide-gray-700'>
              <div className='my-2 space-y-1'>
                <h2 className='text-xl font-semibold sm:text-2xl'>{name}</h2>
                <p className='px-5 text-xs sm:text-base dark:text-gray-400'>
                  {user.title}
                </p>
                <div>
                  <div className='flex '>
                    <div className='mt-1 px-1'>
                      <Rating
                        name='read-only'
                        size='small'
                        value={avgreviews}
                        precision={0.1}
                        readOnly
                      />
                    </div>

                    <p className='text-xs sm:text-base text-gray-500'>
                      rating({reviews.length}reviews)
                    </p>
                  </div>
                </div>
                <div>
                  <div className=' font-bold text-1xl mb-2 text-blue-800'>
                    {hourRate}
                    <span className='text-2xl'>৳</span>/Hr
                  </div>
                  <div className='w-56 flex gap-2'>
                    {expertList &&
                      expertList.map(
                        (elemnt, index) =>
                          elemnt.course !== '' && (
                            <Badge color='indigo' className='p-2' key={index}>
                              {elemnt.course}
                            </Badge>
                          )
                      )}
                  </div>
                  <button
                    type='button'
                    className='text-white  mt-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '
                    onClick={() => {
                      navigate('Book', { state: { from: instructor } });
                    }}
                  >
                    Hire now
                  </button>
                </div>
              </div>

              <div className='flex justify-center pt-2 space-x-4 align-center'>
                <a
                  rel='noopener noreferrer'
                  href={github}
                  aria-label='GitHub'
                  className='p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400'
                >
                  <svg
                    viewBox='0 0 496 512'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 fill-current'
                  >
                    <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
                  </svg>
                </a>

                <a
                  rel='noopener noreferrer'
                  href={linkedIn}
                  aria-label='GitHub'
                  className='p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-linkedin'
                    viewBox='0 0 16 16'
                  >
                    {' '}
                    <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />{' '}
                  </svg>
                </a>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  aria-label='Email'
                  className='p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400'
                >
                  <svg
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 fill-current'
                  >
                    <path d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default MentorCard;

// <LocalizationProvider dateAdapter={AdapterDayjs}>
//   <DateTimePicker
//     label='Select date and time'
//     //   onChange={(newValue) => setValue(newValue)}
//     minTime={start}
//     value={value}
//     viewRenderers={{
//       hours: renderTimeViewClock,
//       minutes: renderTimeViewClock,
//       seconds: renderTimeViewClock,
//     }}
//     onChange={(newValue) => setValue(newValue)}
//   />
// </LocalizationProvider>;
