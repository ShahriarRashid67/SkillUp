import React, { useEffect, useState } from 'react';

const Search = ({ course, all, setInstructors }) => {
  const [sCourse, setsCourse] = useState('');
  const [text, setText] = useState('');
  const onSearch = (e) => {
    setText(e.target.value);
    if (!text) return setInstructors('');
    console.log('Text', all);

    const arr = all.filter(
      (a) => a.description.includes(text) || a.title.includes(text)
    );
    setInstructors(arr);
  };
  return (
    <div>
      <div className='my-10  ml-56 '>
        <div className='join flex gap-2 '>
          <div className='relative flex mr-3 items-center   w-72  border-2 h-11 rounded-lg focus-within:shadow-lg bg-white overflow-hidden'>
            <div className='grid place-items-center h-full w-14 text-gray-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>

            <input
              className='peer h-full w-full outline-none text-sm text-gray-700 pr-2'
              type='text'
              id='search'
              onChange={(e) => onSearch(e)}
              placeholder='Search something..'
            />
          </div>

          <select
            onChange={(e) => setsCourse(e.target.value)}
            className=' p-1 px-8 border-2 w-25 rounded-lg border-gray-300 text-gray-700 sm:text-sm'
          >
            <option value='' disabled></option>
            {course?.map((item) => (
              <option key={item.id} value={item.courseName}>
                {item.courseName}
              </option>
            ))}
          </select>

          <button
            type='submit'
            onClick={onSearch}
            className='text-white  mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
