import React from 'react';
import { Navbar, Footer } from '../components';
import  IconLogin  from '../assets/il_login.svg'; 
import Password_Seen from '../assets/Password_Seen.svg';

function login(type) {
  return (
    <div >
      <Navbar />
      <div className="mx-20 my-24 p-3 border-0 rounded-lg shadow-lg  flex flex-col lg:w-[1184px] sm:w-[450px] lg:h-[508px]bg-white-normal  outline-none focus:outline-none">
        <div class="grid md:grid-cols-2 md:gap-2">
          <div className='lg:mx-20 lg:my-20 sm:mx-32 sm:my-5 lg:w-[400px] sm:w-40'> 
            <img src={IconLogin} /></div>
          <div className="p-10 lg:w-[500px] sm:w-[300px] lg:h-96 bg-gradient-to-r from-light-grey to-light-grey lg:mx-9 lg:my-16 sm:mx-14 rounded-lg shadow-lg">
            <h1 className='md:text-3xl text-black-normal font-bold md:ml-7 md:mb-10'>Welcome Back !</h1>
            <label className="block ml-4 my-1 ">
              <input type="email" name="email" className="md:w-96 mt-1 md:px-3 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-black-normal focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="Email" />
              <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <input type="password" name="password" className="md:w-96 mt-5 md:px-3 md:py-3 bg-white border shadow-sm border-slate-300 placeholder-black-normal focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="Password" />
                <span className="z-9 lg:mr-6 h-full leading-snug font-normal absolute text-center text-slate-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-8">
                  <img src={Password_Seen} />
                </span>
              </div>
            </label>
            <h2 className='lg:ml-56 sm:ml-20 sm:text-xs text-dark-purple'>Forgot Password?</h2>
            <button className= {`${type='light-grey' ? 'bg-medium-purple text-light-grey' : 'bg-transparent text-dark-purple'} text-center items-center md:w-80 w-52 sm:text-sm hover:text-dark-purple hover:bg-light-grey border border-dark-purple font-bold py-2 md:px-4 rounded md:my-10 md:mx-10 `}>
              <span>Log In</span>
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default login