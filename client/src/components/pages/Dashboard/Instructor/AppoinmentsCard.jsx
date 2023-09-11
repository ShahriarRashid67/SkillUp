import { AiFillEye } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

const AppoinmentsCard = ({ user }) => {
  const { mentorID, courseName, amount } = user;
  //find name from store
  const dataUser = JSON.parse(localStorage.getItem('user'));
  const allUser = JSON.parse(localStorage.getItem('allUser'));
  const ind = allUser.findIndex((user) => user.id == mentorID);
  const name = allUser[ind].name;
  const onApprove = () => {
    const cred = {
      mentor: name,
      mentorID,
      course: courseName,
    };
    fetch(`http://localhost:3001/expert/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cred),
    })
      .then((data) => data.json(data))
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className='my-5 flex justify-between items-center shadow-lg hover:shadow-xl p-4 rounded-xl bg-slate-50'>
      <div className=' flex gap-4'>
        <div className='details text-left'>
          <h3 className='text-blue-600 font-bold text-lg mb-1'>
            {allUser[ind].name}
          </h3>
          {courseName && <p>{courseName}</p>}
          {amount && <p>{amount}</p>}
        </div>
      </div>
      <div className=''>
        <div className=' flex-row gap-2 font-medium'>
          <button
            className='flex items-center  mb-2 gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-md'
            onClick={onApprove}
          >
            <BsCheckLg></BsCheckLg> Accept
          </button>
          <button className='flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1 rounded-md'>
            <RxCross2></RxCross2> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentsCard;
