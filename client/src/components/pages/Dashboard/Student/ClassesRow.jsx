import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsCashCoin, BsPlayCircle } from 'react-icons/bs';
import Swal from 'sweetalert2';

const compareDates = (date1, date2) => {
  return new Date(date1) > new Date(date2);
};
const ClassesRow = ({ session }) => {
  const { id, mentorID, mentorStatus, paymentStatus, roomID, day } = session;
  const [mentor, setMentor] = useState('');
  const [mentorEmail, setMentorEmail] = useState('');
  const [hourRate, sethourRate] = useState('');
  let date = day.slice(0, 10);
  let time = day.slice(11, 16);
  date = date.split('-').reverse().join('-');
  let payOn = false;
  const today = new Date();
  const end = new Date(day);
  end.setHours(end.getHours() + 1);
  console.log('Old', day);
  console.log('Added', end);
  console.log('Month', end.getMonth());
  useEffect(() => {
    if (!mentor && mentorID) {
      const cred = {
        id: mentorID,
      };
      fetch('http://localhost:3001/auth/info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cred),
      })
        .then((data) => data.json())
        .then((data) => {
          if (!data.error) {
            console.log('Mentor Data', data[0]);
            setMentor(data[0].name);
            setMentorEmail(data[0].email);
            // sethourRate(data.)
          }
        });
    }
    fetch(`http://localhost:3001/instructor/${mentorID}`)
      .then((data) => data.json(data))
      .then((data) => sethourRate(data.hourRate));
  });
  const onPayment = () => {
    const bo = {
      amount: hourRate,
      id,
    };

    fetch(`http://localhost:3001/order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bo),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
        console.log(data);
      });
    const cred = {
      paymentStatus: 'Paid',
    };
    fetch(`http://localhost:3001/sessions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cred),
    })
      .then((data) => data.json(data))
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Session have beed approved',
          text: 'Wait for the payment',
        });
      });
  };
  const navigate = useNavigate();
  const isFuture = compareDates(day, today);
  return (
    <>
      <tr className='border-b border-opacity-20  bg-gray-50  font-semibold text-base'>
        <td className='p-3'>
          <p>
            {/* {mentor && { mentor }} */}
            {/* { !mentor && mentor} */}
            {mentor}
          </p>
        </td>

        <td className='p-3'>
          <p className=''>{mentorEmail}</p>
        </td>
        <td className='p-3'>
          <p>{time} BST</p>
          <p>{date}</p>
        </td>
        <td className='p-3  text-center'>
          <p>{hourRate}</p>
        </td>

        <td className='p-3'>
          {mentorStatus === 'Pending' && (
            <div>
              <span className=' py-3 font-bold rounded-md '>
                <button className='flex items-center gap-2   bg-amber-400 text-gray-900 px-3 py-1 rounded-md'>
                  <AiOutlineClockCircle></AiOutlineClockCircle>waiting for
                  instructor
                </button>
              </span>
            </div>
          )}
          {mentorStatus === 'Approved' && !paymentStatus && (
            <div>
              <span className=' py-3 font-bold rounded-md '>
                <button
                  className='flex items-center gap-2  bg-emerald-400 text-gray-900 px-4 py-1 rounded-md'
                  onClick={onPayment}
                >
                  <BsCashCoin></BsCashCoin> Pay now
                </button>
              </span>
            </div>
          )}

          {/* {isFuture ? 'Future' : 'past'} */}

          {mentorStatus === 'Approved' && paymentStatus && isFuture && (
            <span className=' py-3 font-bold rounded-md '>
              <button
                className='flex items-center gap-2  disabled: bg-sky-300 text-gray-900 px-4 py-1 rounded-md'
                onClick={() => {
                  navigate('Room', { state: { from: session } });
                }}
              >
                <BsPlayCircle></BsPlayCircle> Join
              </button>
            </span>
          )}
          {/* // <Navigate state={{ from: session }} to='Room'></Navigate>
          //{' '}
          <Link to='Room' session={session}>
            // Join room //{' '}
          </Link>
          } */}
        </td>
      </tr>
    </>
  );
};

export default ClassesRow;
