import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const Addcourse = () => {
  const [courseList, setCourseList] = useState([]);
  const [course, setCourse] = useState('');
  useEffect(() => {
    fetch(`http://localhost:3001/course`)
      .then((data) => data.json(data))
      .then((data) => {
        setCourseList(data);
      });
  }, [courseList]);
  const addCourse = () => {
    const cred = {
      courseName: course,
    };
    fetch(`http://localhost:3001/course`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cred),
    })
      .then((data) => data.json(data))
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <TextField
        id='course'
        label='CourseName'
        variant='outlined'
        onChange={(e) => setCourse(e.target.value)}
      />
      <button
        className=' ml-4 h-14  px-2 w-30 rounded-lg  bg-blue-400 font-semibold text-white '
        onClick={addCourse}
      >
        Add Course
      </button>
      {console.log(courseList)}
      <div className='w-44 ml-10'>
        {courseList &&
          courseList.map((cou, index) => (
            <div className=' text-left'>
              {index + 1}) {cou.courseName}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Addcourse;
