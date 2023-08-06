import { useEffect, useState } from 'react';
import ManageClassRow from './ManageClassRow';

const AdminManageClasses = () => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/sessions/`)
      .then((data) => data.json())
      .then((data) => {
        setSessions(data);
        console.log('Sess', sessions);
      });
  }, []);
  return (
    <div>
      <div className='container p-2 mx-auto sm:p-4 dark:text-gray-100'>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-xs text-center bg-slate-200 rounded-2xl'>
            <thead className='dark:bg-gray-800'>
              <tr className=''>
                <th className='p-3'>Instructor </th>
                <th className='p-3'>Course Name</th>
                <th className='p-3'>Student</th>
                <th className='p-3'>Date</th>
                <th className='p-3'>Course Fee</th>
                <th className='p-3'>Status</th>
                <th className='p-3 text-left'>Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <ManageClassRow
                  key={session.id}
                  session={session}
                ></ManageClassRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminManageClasses;
