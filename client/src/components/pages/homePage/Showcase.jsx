import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import Lottie from "lottie-react";
import showAnimation from "../../../assets/Animation/27637-welcome.json";
const Showcase = () => {
  return (
    <div>
      <div className="md:flex items-center min-h-[500px] max-w-6xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <Lottie
            animationData={showAnimation}
            loop={true}
            className="w-10/12"
          />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="text pr-10">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
              Skillup
            </h1>
            <p>
            Skillup is a platform where you can connect with qualified and experienced mentors who can offer you personalized and one-on-one aid on any subject that you are studying. Whether you need help with math, science, history, literature, or any other subject, we have a mentor for you.
            Our mentors are not just tutors who give you answers or solutions. They are coaches who help you understand concepts, develop the skills, and apply the knowledge that you need to succeed in your studies. They will also motivate you, encourage you, and inspire you to achieve your academic goals. It is more than just a homework help service. It is a learning community where you can find mentors who care about your success and growth. Join us today and get the help that you deserve!
            </p>
            <div className="md:flex max-w-2xl mx-auto justify-around bg-blue-600/20 p-5 rounded-lg mt-5 z-50">
              <div className="flex gap-5 items-center cursor-pointer hover:shadow-md p-5 rounded-lg transition-all duration-300 group">
                <div className="group-hover:rotate-[360deg] duration-500">
                  <SiGoogleclassroom size={30}></SiGoogleclassroom>
                </div>
                <div className="text-left">
                  <h1 className="text-indigo-600 text-xl font-extrabold">
                    10k+
                  </h1>
                  <p className="text-sm">Total Courses</p>
                </div>
              </div>
              <div className="flex gap-5 items-center cursor-pointer hover:shadow-md p-5 rounded-lg transition-all duration-300 group">
                <div className="group-hover:rotate-[360deg] duration-500">
                  <FaChalkboardTeacher size={30}></FaChalkboardTeacher>
                </div>
                <div className="text-left">
                  <h1 className="text-indigo-600 text-xl font-extrabold">
                    500+
                  </h1>
                  <p className="text-sm">Expert Mentor</p>
                </div>
              </div>
              <div className="flex gap-5 items-center cursor-pointer hover:shadow-md p-5 rounded-lg transition-all duration-300 group">
                <div className="group-hover:rotate-[360deg] duration-500">
                  <PiStudent size={30}></PiStudent>
                </div>
                <div className="text-left">
                  <h1 className="text-indigo-600 text-xl font-extrabold">
                    250k+
                  </h1>
                  <p className="text-sm">Students Globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
