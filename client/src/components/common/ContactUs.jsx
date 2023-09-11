import React, { useContext, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Authcontext } from '../../provider/Authprovider';
const ContactUs = () => {
  // const localizer = momentLocalizer(moment);
  // const { userID } = useContext(Authcontext);

  // const [datas, setData] = useState([]);
  // let stat = [];

  // useEffect(() => {
  //   const cred = {
  //     mentorID: userID,
  //   };
  //   console.log(cred);
  //   fetch(`http://localhost:3001/sessions/instructor`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(cred),
  //   })
  //     .then((data) => data.json(data))
  //     .then((data) => {
  //       setData(data);
  //     });
  //   for (let i = 0; i < datas.length; i++) {
  //     let t = new Date(datas[0].day);
  //     t.setHours(t.getHours() + 1);
  //     let da = {
  //       start: moment(datas[0].day).toDate(),
  //       end: moment(t).toDate(),
  //       title: 'H',
  //     };
  //     // console.log(da);
  //     stat.push(da);
  //   }
  //   console.log(stat);
  // }, []);

  // useEffect(() => {
  //   // datas.map((item,index) => (
  //   //   let t = new Date(item.day),
  //   //   t.setHours(t.getHours() + 1),
  //   //   let da = {
  //   //     start: item.day,
  //   //     end: t,
  //   //     title: item.massage
  //   // },
  //   //   stat.events.push(da),
  //   // ))
  //   if (!datas) return;

  // }, []);

  return (
    <div>
      <form>
        <input placeholder='Enter Your massage' />
        <button>Submit</button>
      </form>
      {/* {stat.length > 0 && (
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView='month'
          events={stat}
          style={{ height: '100vh' }}
        />
      )} */}
    </div>
  );
};

export default ContactUs;
