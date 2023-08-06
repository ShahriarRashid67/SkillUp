import React, { useEffect, useState } from 'react';
import MentorCard from './MentorCard';
import Room from '../../../common/room';
import Search from './Search';
import InstructorGrid from './InstructorGrid';

const BrowseMentor = () => {
  const [course, setCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [instructors, setInstructors] = useState(null);
  const getAllinstructor = () => {
    fetch(`http://localhost:3001/instructor/`)
      .then((data) => data.json())
      .then((data) => {
        setInstructors(data);
        // console.log(data);
      });
  };
  useEffect(() => {
    getAllinstructor();
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3001/course`)
      .then((data) => data.json(data))
      .then((data) => {
        setCourse(data);
      });
    // console.log(course);
  }, []);
  /// search button here
  // const onSearch = () => {
  //   // const
  //   const select = {
  //     course: 'sad',
  //   };
  //   fetch(`http://localhost:3001/expert/`, {
  //     method: 'GET',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify(select),
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setInstructor(data);
  //     });
  //   console.log(instructor);
  // };

  return (
    <div>
      {/* <Room></Room> */}
      {/* <Search course={course}></Search> */}
      {/* <select></select> */}
      {/* {course &&
        course.map((item, index) => <div key={index}>{item.courseName}</div>)} */}
      <Search course={course}></Search>
      {console.log(instructors)}
      {instructors && (
        <InstructorGrid instructors={instructors}></InstructorGrid>
      )}
    </div>
  );
};

export default BrowseMentor;
