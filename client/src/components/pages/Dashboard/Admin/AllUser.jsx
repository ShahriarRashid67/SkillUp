import { useEffect, useState } from 'react';
import AllUserRow from './AllUserRow';
const AllUser = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/auth/all`)
      .then((data) => data.json(data))
      .then((data) => {
        const filteredData = data.filter((item) => item.role !== 'Admin');
        console.log(filteredData);
        setUser(filteredData);
      });
  }, []);
  return (
    <div>
      <div className='ml-4'>
        <div className='overflow-x-auto'>
          <table className='min-w-full text-xs text-left'>
            <tr className=' text-lg  font-serif '>
              <th className='p-3 bg-slate-200 rounded-tl-2xl'>Name</th>
              <th className='p-3 bg-slate-200'> Email</th>
              <th className='p-3 bg-slate-200'>Role</th>
              <th className='p-3 bg-slate-200 text-center'>Registered</th>
              <th className='p-3 bg-slate-200 px-11'>Action</th>
            </tr>
            <tbody>
              {users.map((user) => (
                <AllUserRow key={user.id} user={user}></AllUserRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
