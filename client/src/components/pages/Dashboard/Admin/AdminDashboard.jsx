import React, { useEffect, useState } from 'react';
import { PiStudentBold } from 'react-icons/pi';
import { FaUserDoctor, FaBook } from 'react-icons/fa6';
import { BiTimeFive } from 'react-icons/bi';

import Chart from 'react-apexcharts';
const AdminDashboard = () => {
  const [instructor, setInstrcutor] = useState({
    series: [10, 4],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ['Approved', 'Pending'],
      title: {
        text: 'Instructor approved',
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
        data: [12, 2, 15, 7, 8, 7, 3],
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
        <div className='flex w-44  h-24 border-2  rounded-xl p-2 shadow-lg bg-orange-300'>
          <PiStudentBold className='h-20 w-20'></PiStudentBold>
          <div className='mt-2'>
            <div className='font-bold text-4xl'>20</div>
            <div className='text-lg'>Students</div>
          </div>
        </div>
        <div className='flex w-44  h-24 border-2  rounded-xl p-2 shadow-lg bg-orange-300'>
          <FaUserDoctor className='h-20 w-20 p-2'></FaUserDoctor>
          <div className='mt-2'>
            <div className='font-bold text-4xl'>10</div>
            <div className='text-lg'>Instructors</div>
          </div>
        </div>
        <div className='flex w-44  h-24 border-2  rounded-xl p-2 shadow-lg bg-orange-300'>
          <FaBook className='h-20 w-20 p-2'></FaBook>
          <div className='mt-2'>
            <div className='font-bold text-4xl'>20</div>
            <div className='text-lg'>Courses</div>
          </div>
        </div>
        <div className='flex w-44  h-24 border-2  rounded-xl p-2 shadow-lg bg-orange-300'>
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
            options={state.options}
            series={state.series}
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
    </div>
  );
};

export default AdminDashboard;
