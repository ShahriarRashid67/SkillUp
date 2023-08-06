import { BsCheckLg } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

const PendingRow = ({ user }) => {
  console.log('Row', user);
  const { id } = user;
  const allUser = JSON.parse(localStorage.getItem('allUser'));
  const ind = allUser.findIndex((user) => user.id == id);
  const updatedAt = allUser[ind].createdAt;
  let date = updatedAt.slice(0, 10);
  let time = updatedAt.slice(11, 16);
  date = date.split('-').reverse().join('-');
  const onAprove = () => {
    const bdy = {
      status: 'Approve',
    };
    fetch(`http://localhost:3001/instructor/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bdy),
    })
      .then((data) => data.json(data))
      .then((data) => console.log(data));
  };
  return (
    <>
      <tr className='border-b border-opacity-20  bg-gray-50  font-semibold text-base'>
        <td className='p-3 px-2'>
          <p>{allUser[ind].name}</p>
        </td>
        <td className='p-3 px-2'>
          <p>{allUser[ind].email}</p>
        </td>
        <td className='p-3 px-2'>
          <p>{date}</p>
          <p>{time}</p>
        </td>
        <td>
          <div className='flex gap-4 font-medium '>
            <button
              className='flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-md'
              onClick={onAprove}
            >
              <BsCheckLg></BsCheckLg> Aprove
            </button>
            <button className='flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-md'>
              <RxCross2></RxCross2> Decline
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default PendingRow;
