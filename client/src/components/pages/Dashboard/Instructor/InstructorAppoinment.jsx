import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import { BiTimeFive } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { PiStudentBold } from 'react-icons/pi';
const InstructorAppoinment = () => {
  const [reviews, setReviews] = useState([]);
  const User = JSON.parse(localStorage.getItem('user'));
  const allUser = JSON.parse(localStorage.getItem('allUser'));
  useEffect(() => {
    fetch(`http://localhost:3001/reviews/${User.id}`)
      .then((data) => data.json(data))
      .then((data) => {
        // console.log('rev', data),
        setReviews(data);
        console.log(reviews);
      });
  }, []);
  const [instructor, setInstrcutor] = useState({
    series: [2, 8, 4],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ['React', 'C++', 'Java Script'],
      title: {
        text: 'Session Course',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            fill: {
              type: 'gradient',
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      },
    },
  });
  const [earning, setEarning] = useState({
    series: [
      {
        name: 'Sessions',
        data: [12, 2, 15, 7, 8, 7, 3],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'No of Session ',
      },
      stroke: {
        curve: 'straight',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2023-08-1',
          '2023-08-2',
          '2023-08-3',
          '2023-08-4',
          '2023-08-5',
          '2023-08-6',
          '2023-08-7',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy',
        },
      },
    },
  });
  const [noSession, setNpSession] = useState({
    series: [
      {
        name: 'Sessions',
        data: [12, 2, 15, 7, 8, 7, 3],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'No of Session ',
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2023-08-1',
          '2023-08-2',
          '2023-08-3',
          '2023-08-4',
          '2023-08-5',
          '2023-08-6',
          '2023-08-7',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy',
        },
      },
    },
  });
  return (
    <div className=' bg-slate-50  gap-3'>
      <div className=' px-44 py-10 flex gap-10 col-span-6'>
        <div className='flex w-44  h-24 border-2  rounded-xl p-2 shadow-xl bg-gradient-to-r from-purple-300 to-yellow-200'>
          <PiStudentBold className='h-20 w-20'></PiStudentBold>
          <div className='mt-2'>
            <div className='font-bold text-4xl'>20</div>
            <div className='text-lg'>Students</div>
          </div>
        </div>
        <div className='flex w-44  h-24 border-2  rounded-xl p-2 shadow-xl bg-gradient-to-r from-yellow-200 via-green-200 to-green-300'>
          <LiaChalkboardTeacherSolid className='h-20 w-20 p-2'></LiaChalkboardTeacherSolid>
          <div className='mt-2'>
            <div className='font-bold text-4xl'>4.3</div>
            <div className='text-lg'>Rating</div>
          </div>
        </div>
        <div className='flex w-44  h-24 border-2  rounded-xl p-2 shadow-xl bg-gradient-to-r from-green-300 to-purple-200'>
          <FaBook className='h-20 w-20 p-2'></FaBook>
          <div className='mt-2'>
            <div className='font-bold text-4xl'>20</div>
            <div className='text-lg'>Courses</div>
          </div>
        </div>
        <div className='flex w-44  h-24 border-2  rounded-xl p-2  shadow-xl bg-gradient-to-r from-purple-200  to-teal-200'>
          <BiTimeFive className='h-20 w-20 p-2'></BiTimeFive>
          <div className='mt-2'>
            <div className='font-bold text-4xl'>50</div>
            <div className='text-lg'>Sessions</div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 ml-6 gap-6'>
        <div className='mt-10 p-2 ml-10  rounded-xl bg-slate-200 shadow-lg'>
          <Chart
            options={earning.options}
            series={earning.series}
            type='line'
            width='520'
          />
        </div>

        <div className=' mt-10 p-2 rounded-xl ml-10 bg-slate-200 shadow-lg w-5/6'>
          <Chart
            options={instructor.options}
            series={instructor.series}
            type='donut'
            width='450'
          />
        </div>

        <div className='mt-10 p-2 rounded-xl ml-10 bg-slate-200  '>
          <span className=' text-lg'>Latest Student Reviews</span>
          <div className='m-4'></div>
          {reviews.map((item) => {
            return (
              <div className=' bg-slate-500  mb-2 w-4/5 ml-12 rounded-xl text-white'>
                <div>Name</div>
                <div>{item.details}</div>
                <Rating
                  name='read-only'
                  size='small'
                  value={item.star}
                  precision={0.1}
                  readOnly
                />
              </div>
            );
          })}
        </div>
        <div className='mt-10 p-2 ml-10  rounded-xl bg-slate-200 shadow-lg w-5/6'>
          <div className='mt-20'></div>
          <Chart
            options={noSession.options}
            series={noSession.series}
            type='area'
            width='450'
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorAppoinment;
