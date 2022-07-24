import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Faders, List, MagnifyingGlass, X, BellRinging, Storefront } from 'phosphor-react';
import { Transition } from "@headlessui/react";
import Placeholder from '../assets/placeholder.svg';

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div>
      {isLogin ? (
        <nav class="z-10 fixed top-0 left-0 mb-8 px-2 py-5 w-full shadow bg-gradient-to-r from-dark-purple to-purple" >
          <div class="container m-auto flex justify-around items-center text-gray-700">
            <Link to="/">
              <img src={logo} alt='logo' className='md:cursor-pointer h-9' />
            </Link>
            <div className="hidden cursor-pointer md:flex items-center item-center border-r border-r-dark-purple border-solid text-black-400 focus-within:text-black-400">
              <Faders class="absolute  sm:ml-3 sm:mt-[1]" size={24} color="#4d4c7d" weight="fill" />
              <Link to="/search">
                <MagnifyingGlass class="absolute mx-[560px] my-0 top-7" size={24} color="#4d4c7d" weight="fill" />
              </Link>
              <input className="pl-16  placeholder:text-gray-300  sm:w-[600px] px-5 py-2  rounded-md outline-none" placeholder="Placeholder" />
            </div>
            <div className='cursor-pointer hidden md:flex items-center' >
              <Link to="/myproduct-seller">
                <Storefront size={24} color="#fafafa" weight="fill" className='mr-5' />
              </Link>
              <Link to="/notifications" className="nav-link active">
                <BellRinging size={24} color="#fafafa" weight="fill" className='mr-5' />
              </Link>
              <Link to="/profile">
                <img src={Placeholder} />
              </Link>
            </div>
            <div className="-mr-15 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-dark-purple inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-light-purple  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-medium-purple focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <List size={24} color="#00000" weight="fill" />
                ) : (
                  <X size={24} weight="fill" />
                )}
              </button>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-10  pb-5 space-y-1 sm:px-3">
                  <div className="md:flex cursor-pointer items-center mb-4 item-center border-r-medium-purple border-solid text-black-400 focus-within:text-black-400">
                    <Faders class="absolute ml-[70px] mt-2" size={24} color="#4d4c7d" weight="fill" />
                    <Link to="/search">
                      <MagnifyingGlass class="absolute mx-[360px] sm:mx-[500px]" size={24} color="#4d4c7d" weight="fill" />
                    </Link>
                    <input class="pl-16 placeholder:text-gray-300  sm:w-[500px] w-[340px] px-5 py-2  rounded-md outline-none" placeholder="Placeholder" />
                  </div>

                  <button class="bg-transparent text-white font-semibold py-1 px-3 border border-light-grey rounded m-2 hover:text-dark-purple hover:bg-white">
                    Login
                  </button>
                  <button class="bg-white text-dark-purple font-bold py-1 px-3 m-2  rounded hover:text-light-grey hover:bg-transparent border border-light-grey" >
                    Register
                  </button>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      ) : (
        <nav class="z-10 fixed top-0 left-0 px-2 py-3 w-full shadow bg-gradient-to-r from-dark-purple to-purple" >
          <div class="container m-auto flex justify-around items-center text-gray-700">
            <Link to="/">
              <img src={logo} alt='logo' className='md:cursor-pointer h-9' />
            </Link>
            <div className="hidden cursor-pointer md:flex items-center item-center border-r border-r-dark-purple border-solid text-black-400 focus-within:text-black-400">
              <Link to="/search" className='mb-6' />
              <Faders class="absolute  sm:ml-3 sm:mt-[1]" size={24} color="#4d4c7d" weight="fill" />
              <Link to="/search">
                <MagnifyingGlass class="absolute mx-[560px] my-0 top-7" size={24} color="#4d4c7d" weight="fill" />
              </Link>
              <input className="pl-16  placeholder:text-gray-300  sm:w-[600px] px-5 py-2  rounded-md outline-none" placeholder="Placeholder" />
            </div>
            <div className='hidden md:flex' >
              <Link to="/login" className="nav-link active">
                <button class=" bg-transparent text-light-grey font-semibold py-2 px-4 border border-light-grey rounded m-2 hover:text-dark-purple hover:bg-light-grey">
                  Login
                </button>
              </Link>
              <Link to="/register" className="nav-link active">
                <button className="bg-light-grey text-dark-purple font-semibold py-2 px-4 border border-light-grey rounded m-2 hover:text-light-grey hover:bg-medium-purple">
                  Register
                </button>
              </Link>
            </div>
            <div className="sm:ml-[400px] flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-dark-purple inline-flex items-center justify-center p-2 rounded-md hover:bg-light-purple  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-medium-purple focus:ring-dark-purple"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <List size={24} color="#00000" weight="fill" />
                ) : (
                  <X size={24} weight="fill" />
                )}
              </button>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-10  pb-5 space-y-1 sm:px-3">
                  <div className="md:flex cursor-pointer items-center mb-4 item-center border-r-medium-purple border-solid text-black-400 focus-within:text-black-400">
                    <Faders class="absolute sm:ml-[34px] mt-2" size={24} color="#4d4c7d" weight="fill" />
                    <Link to="/search">
                      <MagnifyingGlass class="absolute sm:mx-[540px] mt-2" size={24} color="#4d4c7d" weight="fill" />
                    </Link>
                    <input class="pl-16 placeholder:text-grey sm:w-[566px] px-5 py-2  rounded-md outline-none" placeholder="Placeholder" />
                  </div>
                  <Link to="/login">
                    <button class="bg-transparent text-light-grey font-semibold py-1 px-3 border border-light-grey rounded sm:m-2 hover:text-dark-purple hover:bg-white-normal">
                      Login
                    </button>
                  </Link>

                  <button class="bg-white-normal text-dark-purple font-bold py-1 px-3 sm:m-2 rounded hover:text-light-grey hover:bg-purple border border-light-grey sm:mr-[400px]">
                    Register
                  </button>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      )}
    </div>
  );
}
export default Navbar;

