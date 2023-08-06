import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const AllUserRow = ({ user }) => {
  const { name, email, role, updatedAt } = user;
  let date = updatedAt.slice(0, 10);
  let time = updatedAt.slice(11, 16);
  date = date.split('-').reverse().join('-');
  return (
    <>
      <tr className='border-b border-opacity-20  bg-gray-50  font-semibold text-base'>
        <td className='p-3 px-2'>
          <p>{name}</p>
        </td>
        <td className='p-3'>
          <p>{email}</p>
        </td>
        <td className='p-3'>
          <p>{role}</p>
        </td>
        <td className='p-3 text-center'>
          <p>{time}</p>
          <p>{date}</p>
        </td>
        <td className='p-3'>
          <button className='flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-md'>
            <RxCross2></RxCross2> Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllUserRow;
