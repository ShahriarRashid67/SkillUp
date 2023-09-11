import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';

import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState, SyntheticEvent } from 'react';
import PendingInstructor from './PendingInstructor';
import PendingCourse from './PendingCourse';
const PendingSec = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='Instructors' value='1' />
              <Tab label='Courses' value='2' />
              <Tab label='Withdraw' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <PendingInstructor></PendingInstructor>
          </TabPanel>
          <TabPanel value='2'>
            <PendingCourse></PendingCourse>
          </TabPanel>
          <TabPanel value='3'>
            <PendingCourse></PendingCourse>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default PendingSec;
