import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAnimation } from '../AnimationContext';
import block from "../picture/block.webp"
import block3 from "../picture/block3.jpg"

function Signup() {
  const { isLoginVisible, toggleAnimation } = useAnimation();



    return (
      <>
    <div className={`transition-transform duration-300 ${isLoginVisible ? 'translate-x-full' : ''}`}>
  
    <div
      style={{ backgroundImage: `url(${block3})` }}
      className="bg-black w-screen h-screen fixed flex justify-center items-center"
    >
      <div
        style={{ backgroundImage: `url(${block})` }}
        className={`h-[30rem] sm:h-[550px] md:h-[28rem] lg:h-[32rem] xl:h-[35rem] w-10/12 md:w-[23rem] sm:w-[23rem] lg:w-[28rem] xl:w-[30rem] min-w-[20] mb-[1.5rem] bg-white mx-auto  mt-2 rounded-md p-4 md:p-8 lg:p-12 xl:p-16`}
      >
        <div className="w-full md:w-4/5 mx-auto py-6 -mt-8 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center border-spacing-1">
          <h1>Welcome!</h1>
        </div>

        <div className="w-full justify-center flex text-center items-center md:w-[10rem] lg:w-[12rem] xl:w-[14rem] h-8 mx-auto mb-2 px-5 py-1 bg-violet-500 hover-bg-violet-700 rounded-lg cursor-pointer">
              <button>Login With Facebook</button>
            </div>
  
  
        <div className="w-full md:w-11/12 mx-auto mt-4">
          <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First name
          </div>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
  
        <div className="w-full md:w-11/12 mx-auto mt-4">
          <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </div>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          />
        </div>

        <div className="w-full md:w-11/12 mx-auto mt-4">
          <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Confirm Password
          </div>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          />
        </div>
  
        <div className="text-center w-full mt-8 md:mt-6 sm:mt-6 xl:mt-6 md:gap-2 gap-3 flex flex-col md:flex-row">
          {/* <Link to="/"> */}
            <div className="w-full md:w-[6rem] lg:w-[8rem] xl:w-[10rem] h-10 mx-auto px-3 py-2 bg-violet-500 hover-bg-violet-700 rounded-lg cursor-pointer">
              <button onClick={toggleAnimation}>Login</button>
            </div>
          {/* </Link> */}
  
          {/* <Link to="/signup"> */}
            <div className="w-full md:w-[6rem] lg:w-[8rem] xl:w-[10rem] h-10 mx-auto mb-3 px-3 py-2 bg-violet-500 hover-bg-violet-700 rounded-lg cursor-pointer">
              <button>Sign Up</button>
            </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
    </div>
    <Outlet />
  </>
  )
}

export default Signup
