import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsCheckLg, BsPlayCircle } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import Swal from 'sweetalert2';
// import { icons } from 'react-icons/lib';
let payOn = false;
const compareDates = (date1, date2) => {
  return new Date(date1) > new Date(date2);
};

const ClassesRow = ({ session }) => {
  const {
    id,
    studentID,
    mentorID,
    massage,
    mentorStatus,
    paymentStatus,
    roomID,
    day,
  } = session;

  //   console.log(session);
  const [student, setStudent] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  let date = day.slice(0, 10);
  let time = day.slice(11, 16);
  date = date.split('-').reverse().join('-');
  const today = new Date();
  const start = new Date(day);
  const end = new Date(day);
  let dummy = new Date(day);
  let d = dummy.toLocaleTimeString();
  end.setHours(end.getHours() + 1);
  //   console.log('Old', day);
  //   console.log('Added', end);
  //   console.log('Month', end.getMonth());
  useEffect(() => {
    if (!student && studentID) {
      const cred = {
        id: studentID,
      };
      fetch('http://localhost:3001/auth/info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cred),
      })
        .then((data) => data.json())
        .then((data) => {
          if (!data.error) {
            // console.log('Mentor Data', data[0].name);
            setStudent(data[0].name);
            setStudentEmail(data[0].email);
          }
        });
    }
  });

  useEffect(() => {
    payOn = start < today && today < end;
  }, []);
  const onApprove = () => {
    const cred = {
      mentorStatus: 'Approved',
    };
    fetch(`http://localhost:3001/sessions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cred),
    })
      .then((data) => data.json(data))
      .then((data) => {
        // console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Session have beed approved',
          text: 'Wait for the payment',
        });
      });
  };
  const navigate = useNavigate();
  const isFuture = compareDates(day, today);
  function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    if (hrs <= 9) {
      hrs = '0' + hrs;
    }
    if (mins <= 9) {
      mins = '0' + mins;
    }
    if (s <= 9) {
      s = '0' + s;
    }

    return hrs + ':' + mins + ':' + secs;
  }

  return (
    <>
      <tr className='border-b border-opacity-20 font-bold bg-gray-50'>
        <td className='p-3'>
          <p>
            {/* {mentor && { mentor }} */}
            {/* { !mentor && mentor} */}
            {/* {id} */}
            {student}
          </p>
        </td>

        <td className='p-3'>
          <p>{studentEmail}</p>
        </td>
        <td className='p-3'>
          <p>{d} BST</p>
          <p>{date}</p>
        </td>
        <td className='p-3'>
          <p>{massage}</p>
        </td>

        <td className='p-3   justify-self-center'>
          {mentorStatus === 'Pending' && (
            <div className=' space-x-1'>
              <div className=' flex flex-row-reverse gap-4 font-medium   '>
                <button className='flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-md'>
                  <RxCross2></RxCross2> Cancel
                </button>
                <button
                  className='flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1 rounded-md'
                  onClick={onApprove}
                >
                  <BsCheckLg></BsCheckLg> Accept
                </button>
              </div>
            </div>
          )}
          {mentorStatus === 'Approved' && !paymentStatus && (
            <div>
              <span className=' py-3 font-bold rounded-md '>
                <button className='flex items-center gap-2   bg-amber-400 text-gray-900 px-3 py-1 rounded-md'>
                  <AiOutlineClockCircle></AiOutlineClockCircle>waiting for
                  payment
                </button>
              </span>
            </div>
          )}

          {/* {isFuture ? 'Future' : 'past'} */}

          {mentorStatus === 'Approved' &&
            paymentStatus &&
            today > start &&
            today < end && (
              <div>
                <span className=' py-3 font-bold rounded-md '>
                  <button
                    className='flex items-center gap-2   bg-sky-300 text-gray-900 px-4 py-1 rounded-md'
                    onClick={() => {
                      navigate('Room', { state: { from: session } });
                    }}
                  >
                    <BsPlayCircle></BsPlayCircle> Join
                  </button>
                </span>
                {/* <Navigate state={{ from: session }} to='Room'></Navigate>
              <Link to='Room' session={session}>
                Join room
              </Link> */}
              </div>
            )}
          {mentorStatus === 'Approved' &&
            paymentStatus &&
            !payOn &&
            today < start && (
              <div className=' text-center'>
                Session starts in {msToTime(start - today)}
              </div>
            )}
        </td>
      </tr>
    </>
  );
};

export default ClassesRow;
