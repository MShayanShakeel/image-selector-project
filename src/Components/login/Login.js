import React from "react";
// import { block3 } from "../picture";
import block from "../picture/block.webp"
import block3 from "../picture/block3.jpg"
import { Outlet, Link } from "react-router-dom";



const Login = () => {
  return (

    <>
    

      <div style={{backgroundImage : `url(${block3})`, width :"100%" , height :"100%"}} className="bg-black w-screen h-screen fixed"> 
  <div style={{backgroundImage: `url(${block})`}} className={`h-[30rem] w-[23rem] bg-white items-center ml-[30rem] mt-[4rem] rounded-md animate-bounce`}>
          <div className="w-[4rem] py-6 h-auto font-bold  text-5xl ml-[4rem] justify-center border-spacing-1">
            <h1>Welcome! </h1>
          </div>
          <div className="w-[12rem] h-[2rem] bg-blue-600 ml-[5rem] mr-[4.5rem] px-7 py-1 rounded-md">
            <button>Login to FaceBook</button>
            <h1 className="w-auto h-auto font-bold text-base mt-[1rem] ml-[2.5rem]">--OR--</h1>
          </div>
          <div className="w-auto h-auto mt-[3rem]">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-[2rem]">
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ml-[1.5rem] mr-[2rem] w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>


          <div className="w-auto h-auto mt-[0.5rem]">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-[2rem]">
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ml-[1.5rem] mr-[2rem] w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="w-auto font-semibold text-base h-auto flex flex-row mt-[1.5rem] ml-[4.5rem] mr-[4rem]">
          <Link to="/">  <div className="w-[6rem] h-[2rem] ml-[0.5rem] mr-[2rem] mt-[1rem] mb-[2rem] px-[0.7rem] py-[0.3rem] items-center bg-violet-500 hover:bg-violet-700  rounded-lg cursor-pointer "> <button>Login </button></div></Link>
          
          <Link to="/Singup">  <div className="w-[6rem] h-[2rem] ml-[0.5rem] mr-[2rem] mt-[1rem] mb-[2rem] px-[0.7rem] py-[0.3rem] items-center bg-violet-500 hover:bg-violet-700     rounded-lg cursor-pointer "> <button>SingUp</button></div></Link>
          </div>
          
            <h1 className="w-auto h-auto ml-[16rem] mt-[1.5rem] text-sm font-semibold">Forgot password</h1>
          

        </div>
      </div>
      <Outlet />x   
    </>
  );
};

export default Login;
