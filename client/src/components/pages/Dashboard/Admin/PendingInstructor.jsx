import React, { useEffect, useState } from 'react';
import PendingRow from './PendingRow';

const PendingInstructor = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/auth/pending`)
      .then((data) => data.json(data))
      .then((data) => {
        setUser(data);
      });
  }, [users]);

  return (
    <div>
      <div className='ml-4'>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-xs text-left'>
            <tr className=' text-lg  font-serif '>
              <th className='p-3 bg-slate-200 rounded-tl-2xl'>Name</th>
              <th className='p-3 bg-slate-200'>Instructor Email</th>
              <th className='p-3 bg-slate-200'>Registered</th>
              <th className='p-3 bg-slate-200'>Action</th>
            </tr>
            <tbody>
              {users.map((user) => (
                //   console.log(user),

                <PendingRow key={user.id} user={user}></PendingRow>
              ))}
              {/* <ClassesRow></ClassesRow> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingInstructor;
