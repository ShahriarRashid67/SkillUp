import { useEffect, useState } from 'react';
import Banner from './Banner';
import Business from './Business';
import Classes from './Classes';
import Contact from './Contact';
import Instructor from './Instructor';
import InstructorDetails from './InstructorDetails';
import Pricing from './Pricing';
import Review from './Review';
import Showcase from './Showcase';
import StudentSteps from './StudentSteps';

const HomePage = () => {
  // const [data, setData] = useState('');
  useEffect(() => {
    fetch('http://localhost:3001/auth/all')
      .then((data) => data.json(data))
      .then((data) => {
        localStorage.setItem('allUser', JSON.stringify(data));
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Showcase></Showcase>
      {/* <Classes></Classes> */}
      {/* <Pricing></Pricing> */}
      <Business></Business>
      <StudentSteps></StudentSteps>
      <Instructor></Instructor>
      <InstructorDetails></InstructorDetails>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
