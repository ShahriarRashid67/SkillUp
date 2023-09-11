import React, { useEffect, useState } from 'react';
import AppoinmentsCard from '../Instructor/AppoinmentsCard';

const PendingCourse = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/expert/pending`)
      .then((data) => data.json(data))
      .then((data) => {
        setUser(data);
      });
  }, [users]);
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
      {users.map((user, index) => (
        <AppoinmentsCard key={index} user={user}></AppoinmentsCard>
      ))}
    </div>
  );
};

export default PendingCourse;
