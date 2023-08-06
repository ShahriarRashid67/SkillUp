// import { useState } from "react";
import { useLocation } from "react-router-dom";
// import {
//   DateTimePicker,
//   LocalizationProvider,
//   renderTimeViewClock,
// } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { AssuredWorkloadSharp } from "@mui/icons-material";
const Booking = ({ instructor }) => {
  const location = useLocation();
  const from = location.state?.from;
  // const { id, hourRate } = from;
  // const allUser = JSON.parse(localStorage.getItem("allUser"));
  // const ind = allUser.findIndex((user) => user.id == id);
  // console.log("Name", allUser[ind].name);

  // const [value, setValue] = useState("");
  // const start = dayjs().set("hour", 8).startOf("hour");
  // const end = dayjs().set("hour", 9).startOf("hour");

  console.log("From", from);
  return (
    <div className="py-20">
      <div className="max-w-4xl bg-sky-50/50 mx-auto p-5 rounded-xl shadow-lg hover:shadow-xl bg-[url('https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg')] bg-no-repeat bg-cover">
        <h1 className="mt-20 text-xl italic bg-blue-500 px-4 py-2 rounded-md w-fit mx-auto text-white">
          Checkout page
        </h1>
        <table className="max-w-3xl mx-auto mt-3 text-lg backdrop-blur-[2px] font-semibold rounded-lg italic">
          <tr>
            <td className="text-right">Instructor Name : </td>
            <td className="text-left ps-5">name</td>
          </tr>
          <tr>
            <td className="text-right">Fee per hour: </td>
            <td className="text-left ps-5">hour rate</td>
          </tr>
          <tr>
            <td className="text-right">Select date and time :</td>
            <td className="text-left ps-5">
              <select>
                <option value="React">React</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="text-right">Select a time :</td>
            <td className="text-left ps-5">
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Select date and time"
                onChange={(newValue) => setValue(newValue)}
                minTime={start}
                value={value}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider> */}
            </td>
          </tr>
          <tr>
            <td className="text-right">Wtite a massage for instructor</td>
            <td className="text-left ps-5">
              <textarea
                id="name"
                type="text"
                placeholder="Shahriar Rashid"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
              />
            </td>
          </tr>
        </table>
        <button className="px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-900 transition-all duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Booking;
