import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
const InstructorAppoinment = () => {
  const [earning, setEarning] = useState({
    series: [10, 4],
    options: {
      chart: {
        width: 380,
        type: 'area',
      },
      labels: ['Approved', 'Pending'],
      title: {
        text: 'Earnings',
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
  return (
    <div className=' bg-slate-50'>
      <div className='mt-10 p-2 ml-28  rounded-xl'>
        <Chart
          options={earning.options}
          series={earning.series}
          type='area'
          width='520'
        />
      </div>
    </div>
  );
};

export default InstructorAppoinment;
