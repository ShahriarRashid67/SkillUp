import { useContext, useEffect, useState } from 'react';
import ClassesRow from './ClassesRow';
import { Authcontext } from '../../../../provider/Authprovider';
//fdcdf177-a2a0-4558-ac49-dace07d7d7e9
const StudentClasses = () => {
  const { userID } = useContext(Authcontext);
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    const cred = {
      studentID: userID,
    };
    console.log(cred);
    {
      userID &&
        fetch(`http://localhost:3001/sessions/student`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(cred),
        })
          .then((data) => data.json(data))
          .then((data) => {
            setSessions(data);
          });
    }
  }, [sessions]);
  return (
    <div>
      <div className='ml-4'>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-xs text-left'>
            <tr className=' text-lg  font-serif '>
              <th className='p-3 bg-slate-200 rounded-tl-2xl'>
                Instructor Name
              </th>
              <th className='p-3 bg-slate-200'>Instructor Email</th>
              <th className='p-3 bg-slate-200'>Date</th>
              <th className='p-3 bg-slate-200 text-center'>Course Fee</th>
              <th className='p-3 bg-slate-200 px-11 rounded-tr-2xl'>Status</th>
            </tr>
            <tbody>
              {sessions &&
                sessions.map(
                  (session) => (
                    console.log(session),
                    (
                      <ClassesRow
                        key={session.id}
                        session={session}
                      ></ClassesRow>
                    )
                  )
                )}
              {/* <ClassesRow></ClassesRow> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentClasses;
