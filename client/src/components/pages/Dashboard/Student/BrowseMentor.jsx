import React, { useEffect, useState } from 'react';
import MentorCard from './MentorCard';
import Room from '../../../common/room';

const BrowseMentor = () => {
  const [course, setCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
   
    useEffect(() => {
        fetch(`http://localhost:3001/course`)
            .then((data) => data.json())
            .then((data) => { setCourse(data) })
            console.log(course);
    }, []);
    /// search button here
  const onSearch = () => {
    // const 
    const select = {
      course:"sad"
    }
    fetch(`http://localhost:3001/expert/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(select)
    }).then((data) => data.json())
    .then((data) => { setInstructor(data) })
    console.log(instructor);
  }
      
    console.log(course);
    return (
        <div>
          {/* {course.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.courseName}</h2>
          </div>
        );
          })}   */}
        {/* <button onClick={onSearch}>Search</button>
        {!instructor && 
            <h1>Search for a instructor</h1>}
        {instructor && 
          instructor.map((element) => {
            <MentorCard element={element}></MentorCard>
          })
        } */}
        {/* <Room></Room> */}
        <MentorCard></MentorCard>
        <MentorCard></MentorCard><MentorCard></MentorCard><MentorCard></MentorCard><MentorCard></MentorCard>
        </div>
    );
};

export default BrowseMentor;