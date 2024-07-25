import React from 'react'
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { path } from "../devices";
const Homepage = () => {
    const navigate = useNavigate();
  return (
    <div className="leading-normal tracking-normal text-gray-900" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
    <div className="h-screen pb-14 bg-right bg-cover devices-svg custom-svg" >
      {/* Nav */}
      <div className="w-full container mx-auto p-6">
        <div className="w-full flex items-center justify-between">
          <a
            className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <svg
              className="h-8 fill-current text-indigo-600 pr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path>
            </svg>
            Wallet App
          </a>
          
        </div>
      </div>

      {/* Main */}
      <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
           Send Money Securely to your friends
          </h1>
          <div className="flex-col-reverse justify-normal">
          <button type="button"  onClick={()=>{
               navigate("/signin");}}className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2.5  me-2 mb-2 mr-7  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign In</button>
          <button type="button"   onClick={()=>{
               navigate("/signup");
            }}className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</button>
          </div>
         
        </div>

        {/* Right Col */}
        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom devices-svg" src={path} />
          </div>

       
        
       
      </div>
    </div>
  </div>
  )
}

export default Homepage
