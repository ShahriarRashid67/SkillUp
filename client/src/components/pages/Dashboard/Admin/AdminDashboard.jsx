import React, { useEffect, useState } from 'react';
import { PiStudentBold } from 'react-icons/pi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { FaBook } from 'react-icons/fa6';
import { BiTimeFive } from 'react-icons/bi';

import Chart from 'react-apexcharts';

const AdminDashboard = () => {
  const items = JSON.parse(localStorage.getItem('allUser'));
  console.log(items);
  const students = items.filter((word) => word.role === 'Student');
  const instructors = items.filter((word) => word.role === 'Instructor');
  console.log(students.length);
  console.log(instructors.length);
  // console.log(student.length);
  const [instructor, setInstrcutor] = useState({
    series: [students.length, instructors.length],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ['Student', 'Instructor'],
      title: {
        text: 'Student and Instructor',
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
  const [state, setState] = useState({
    series: [
      {
        name: 'Sessions',
        data: [12, 4, 12, 9, 10, 15, 13],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'No of Sessions last week',
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
  const [noSession, setNpSession] = useState({
    series: [
      {
        name: 'Sessions',
        data: [12, 5, 4, 7, 8, 7, 3],
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
  //     let expert = [
  //   ];
  //   useEffect(() => {
  //     fetch(`http://localhost:3001/expert`)
  //       .then((data) => data.json(data))
  //       .then((data) => {
  //         data.map((item) => expert[item.course]++);
  //       });
  //   }, []);
  //   console.log(expert);
  return (
    <div className=' bg-slate-200 '>
      <div className=' px-44 py-10 flex gap-10 col-span-6'>
        <div className='flex w-44  h-24 border-2  rounded-xl p-2 shadow-xl bg-gradient-to-r from-purple-300 to-yellow-200'>
          <PiStudentBold className='h-20 w-20'></PiStudentBold>
          <div className='mt-2'>
            <div className='font-bold text-4xl'>{students.length}</div>
            <div className='text-lg'>Students</div>
          </div>
        </div>
        <div className='flex w-44  h-24 border-2  rounded-xl p-2 shadow-xl bg-gradient-to-r from-yellow-200 via-green-200 to-green-300'>
          <LiaChalkboardTeacherSolid className='h-20 w-20 p-2'></LiaChalkboardTeacherSolid>
          <div className='mt-2'>
            <div className='font-bold text-4xl'>{instructors.length}</div>
            <div className='text-lg'>Instructors</div>
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
      <div className='flex mt-10 gap-5'>
        <div className='mt-10 p-2 ml-28 bg-slate-50  rounded-xl'>
          <Chart
            options={noSession.options}
            series={noSession.series}
            type='area'
            width='520'
          />
        </div>
        <div className=' mt-10 p-2 bg-slate-50  rounded-xl'>
          <Chart
            options={instructor.options}
            series={instructor.series}
            type='donut'
            width='450'
          />
        </div>
      </div>
      <div className='flex mt-1 gap-5'>
        <div className='mt-10 p-2 ml-28 bg-slate-50  rounded-xl'>
          <Chart
            options={state.options}
            series={state.series}
            type='line'
            width='520'
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
