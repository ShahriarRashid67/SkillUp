import { useEffect, useState } from 'react';
import MentorCard from './MentorCard';
const InstructorGrid = ({ instructors }) => {
  return (
    <div className=' ml-2'>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
        {instructors.map(
          (instructor) =>
            instructor.status === 'Approve' &&
            instructor.title &&
            instructor.hourRate && (
              <MentorCard
                key={instructor.id}
                instructor={instructor}
              ></MentorCard>
            )
        )}
      </div>
    </div>
  );
};

export default InstructorGrid;
