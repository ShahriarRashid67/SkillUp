import React, { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const ManageClassRow = ({ session }) => {
  const { mentorID, studentID, courseName, day, mentorStatus, paymentStatus } =
    session;
  const allUser = JSON.parse(localStorage.getItem('allUser'));
  const indMentor = allUser.findIndex((user) => user.id == mentorID);
  const indStudent = allUser.findIndex((user) => user.id == studentID);
  let date = day.slice(0, 10);
  let time = day.slice(11, 16);
  date = date.split('-').reverse().join('-');
  const [hourRate, setHourRate] = useState('');
  console.log(allUser);
  useEffect(() => {
    fetch(`http://localhost:3001/instructor/${mentorID}`)
      .then((data) => data.json(data))
      .then((data) => {
        setHourRate(data.hourRate);
      });
  }, []);
  return (
    <>
      <tr className='border-b border-opacity-20  bg-gray-50  font-semibold text-base text-center'>
        <td className='p-3'>
          <p>{allUser[indMentor].name}</p>
          <p>{allUser[indMentor].email}</p>
        </td>
        <td>{courseName}</td>
        <td className='p-3 '>
          <p>{allUser[indStudent].name}</p>
          <p>{allUser[indStudent].email}</p>
        </td>
        <td>
          <p>{time}</p>
          <p>{date}</p>
        </td>
        <td>
          <p>{hourRate}</p>
        </td>
        <td>
          {mentorStatus === 'Pending' && 'Waiting for mentor'}
          {mentorStatus === 'Approve' &&
            !paymentStatus &&
            'Waiting for payment'}
          {mentorStatus === 'Approved' && paymentStatus && 'Sesson booked'}
        </td>
        <td className='flex mt-5'>
          <button className='flex items-center bg-red-100 text-red-600 px-3 py-1 rounded-md'>
            <RxCross2></RxCross2> Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageClassRow;
