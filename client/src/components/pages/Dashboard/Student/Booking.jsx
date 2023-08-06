// import { useState } from "react";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DateTimePicker,
  LocalizationProvider,
  renderTimeViewClock,
} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AssuredWorkloadSharp } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { Box, Rating } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const Booking = ({ instructor }) => {
  const location = useLocation();
  const from = location.state?.from;
  const { id, hourRate } = from;
  const allUser = JSON.parse(localStorage.getItem('allUser'));
  const User = JSON.parse(localStorage.getItem('user'));
  const ind = allUser.findIndex((user) => user.id == id);

  console.log('Name', allUser[ind].name);

  const [value, setValue] = useState('');
  const start = dayjs().set('hour', 8).startOf('hour');
  const end = dayjs().set('hour', 19).startOf('hour');
  const [expertList, setexpertList] = useState([]);
  const [massage, setMassage] = useState('');
  const [courseName, setCourseName] = useState('');
  const [day, setDay] = useState([]);
  const [mentorInfo, setMentorInfo] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [avgreviews, setavgReviews] = useState('');

  useState(() => {
    fetch(`http://localhost:3001/expert/mentor/${id}`)
      .then((data) => data.json(data))
      .then((data) => {
        // const [s, setS] = useState(data);
        console.log('Expert', data);
        setexpertList(data);
      });
  }, []);
  useState(() => {
    fetch(`http://localhost:3001/instructor/${id}`)
      .then((data) => data.json(data))
      .then((data) => {
        console.log('Inst', data), setMentorInfo(data);
      });
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
  // console.log('From', from);
  const onSubmit = () => {
    const dummy = JSON.stringify(day);
    const time = dummy.substring(1, dummy.length - 1);
    console.log(time);
    if (!massage) {
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: 'Please write a massage',
      });
      return;
    }
    if (!day) {
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: 'Please Select date and time',
      });
      return;
    }
    if (!courseName) {
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: 'Please select course name',
      });
      return;
    }
    const body = {
      studentID: User.id,
      mentorID: id,
      massage: massage,
      courseName,
      day: time,
    };
    fetch(`http://localhost:3001/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((data) => data.json(data))
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Session Booked',
          text: 'Session is booked wait for instructor approval',
        });
      });
  };

  return (
    <div className='flex flex-row  mt-14 ml-5 h-[450px] '>
      <div className='w-1/2 bg-sky-50 rounded-xl rounded-r-none'>
        <div className=' p-5   font-serif '>
          <div className='text-start text-3xl'>{allUser[ind].name}</div>

          <div className=' italic text-start text-sm text-gray-500'>
            {mentorInfo.title}
          </div>
          <div className=' text-start'>{mentorInfo.description}</div>
          <div className=' text-start'> Sessions : {mentorInfo.noSession}</div>
          <div className='text-start flex gap-4 mt-3 mb-10'>
            <Rating
              className=''
              name='read-only small'
              value={avgreviews}
              precision={0.1}
              readOnly
            />
            <p className='text-xs sm:text-base text-gray-500'>
              rating({reviews.length} reviews)
            </p>
          </div>
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className='mySwiper w-96 rounded-xl'
            >
              {
                (console.log(reviews),
                reviews.map((elemnt, index) => (
                  <SwiperSlide key={index} className='px-10'>
                    <div>
                      <div className=''>
                        {
                          allUser[
                            allUser.findIndex(
                              (user) => user.id == elemnt.studentID
                            )
                          ].name
                        }
                      </div>
                      <Rating
                        name='read-only'
                        value={elemnt.star}
                        precision={0.1}
                        readOnly
                      />
                      <p className='text-xs sm:text-base'>{elemnt.details}</p>
                    </div>
                  </SwiperSlide>
                )))
              }
            </Swiper>
          </div>
        </div>
      </div>
      <div className='w-1/2 mx-auto p-5 rounded-xl  rounded-l-none shadow-lg hover:shadow-xl  bg-cyan-100'>
        <h1 className='mt-5 text-2xl  py-2 rounded-md w-fit mx-auto'>
          Confirm your Session
        </h1>
        <table className='max-w-3xl mx-auto mt-3 text-lg backdrop-blur-[2px] font-semibold rounded-lg'>
          {/* <tr>
              <td className='text-left pb-2'>Instructor Name </td>
              <td className='text-left ps-5 pb-2'>{allUser[ind].name}</td>
            </tr> */}
          <tr>
            <td className=' text-left pb-2'>Fee per hour </td>
            <td className='text-left ps-5'> {hourRate}</td>
          </tr>
          <tr className=''>
            <td className=' text-left pb-2'>Select date and time </td>
            <td className='text-left ps-5 pb-3'>
              <select
                className='w-full border-2 rounded p-1'
                onChange={(e) => setCourseName(e.target.value)}
              >
                {expertList.map((elemnt, index) => (
                  // console.log('Ex', elemnt),
                  <option key={index}>{elemnt.course}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td className='text-left pb-2'>Select a time </td>
            <td className='text-left ps-5 pb-2'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label='Select date and time BST'
                  onChange={(newValue) => setDay(newValue)}
                  minTime={start}
                  value={value}
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                />
              </LocalizationProvider>
            </td>
          </tr>
          <tr className=''>
            <td className='text-left  mb-10'>Wtite a massage for instructor</td>
            <td className='text-left ps-5 pb-2'>
              <textarea
                id='name'
                type='text'
                cols={3}
                onChange={(e) => setMassage(e.target.value)}
                placeholder='Massage'
                className='h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900'
              />
            </td>
          </tr>
        </table>
        <button
          onClick={onSubmit}
          className='px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-900 transition-all duration-300'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Booking;
