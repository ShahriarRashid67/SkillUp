import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/pages/homePage/HomePage.jsx';
import Login from './components/pages/LoginAndRegistration/Login.jsx';
import Register from './components/pages/LoginAndRegistration/Register.jsx';
import Authprovider from './provider/Authprovider.jsx';
import CourseDetailsPage from './components/pages/homePage/Classes/CourseDetailsPage.jsx';
import MainDashboard from './components/pages/Dashboard/MainDashboard.jsx';
import Profile from './components/pages/Dashboard/Profile.jsx';
import StudentClasses from './components/pages/Dashboard/Student/StudentClasses.jsx';
import DashboardHome from './components/pages/Dashboard/DashboardHome.jsx';
import FirstBanner from './components/pages/homePage/BannerDetails/FirstBanner.jsx';
import AdminManageClasses from './components/pages/Dashboard/Admin/AdminManageClasses.jsx';
import ErrorPage from './components/common/ErrorPage.jsx';
import InstructorAppoinment from './components/pages/Dashboard/Instructor/InstructorAppoinment.jsx';
import BrowseMentor from './components/pages/Dashboard/Student/BrowseMentor.jsx';
import Room from './components/common/Room.jsx';
import Booking from './components/pages/Dashboard/Student/Booking.jsx';
import InstructorProfile from './components/pages/Dashboard/Instructor/InstructorProfile.jsx';
import InstructorClass from './components/pages/Dashboard/Instructor/InstructorClass.jsx';
import AllUser from './components/pages/Dashboard/Admin/AllUser.jsx';
import PendingInstructor from './components/pages/Dashboard/Admin/PendingInstructor.jsx';
import Addcourse from './components/pages/Dashboard/Admin/Addcourse.jsx';
import AdminDashboard from './components/pages/Dashboard/Admin/AdminDashboard.jsx';
import ContactUs from './components/common/ContactUs.jsx';
import PendingSec from './components/pages/Dashboard/Admin/PendingSec.jsx';
import Reviews from './components/pages/Dashboard/Student/reviews.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/bannerdetails',
        element: <FirstBanner></FirstBanner>,
      },
      {
        path: '/signup',
        element: <Register></Register>,
      },
      {
        path: '/courseDetailsPage',
        element: <CourseDetailsPage></CourseDetailsPage>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <MainDashboard></MainDashboard>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/dashboard/instructor/Profile',
        element: <InstructorProfile></InstructorProfile>,
      },
      {
        path: '/dashboard/browse',
        element: <BrowseMentor></BrowseMentor>,
      },
      {
        path: '/dashboard/StudentClass',
        element: <StudentClasses></StudentClasses>,
      },

      {
        path: '/dashboard/AllUser',
        element: <AllUser></AllUser>,
      },
      {
        path: '/dashboard/InstructorClass',
        element: <InstructorClass></InstructorClass>,
      },
      {
        path: '/dashboard/StudentClass/Room',
        element: <Room></Room>,
      },
      {
        path: '/dashboard/StudentClass/Review',
        element: <Reviews></Reviews>,
      },
      {
        path: '/dashboard/InstructorClass/Room',
        element: <Room></Room>,
      },
      {
        path: '/dashboard/browse/Book',
        element: <Booking></Booking>,
      },
      {
        path: '/dashboard/Appoinments',
        element: <InstructorAppoinment></InstructorAppoinment>,
      },
      {
        path: '/dashboard/ManageAllClasses',
        element: <AdminManageClasses></AdminManageClasses>,
      },
      {
        path: '/dashboard/Pending',
        element: <PendingSec></PendingSec>,
      },
      {
        path: '/dashboard/addCourse',
        element: <Addcourse></Addcourse>,
      },
      {
        path: '/dashboard/Dash',
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: '/dashboard/Contact',
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Authprovider>
    <RouterProvider router={router} />
  </Authprovider>
  // </React.StrictMode>
);
