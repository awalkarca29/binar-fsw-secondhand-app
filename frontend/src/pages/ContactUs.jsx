import React from 'react';
import { Navbar, Footer } from '../components';
import Ic_Whatsapp from '../assets/ic_whatsapp.svg';
import Ic_Instagram from '../assets/ic_instagram.svg';
import Ic_facebook from '../assets/ic_facebook.svg';

function ContactUs(type) {
  return (
    <div>
        <Navbar/>
        <div className="mx-72 my-10 p-3">
            <div class="grid md:grid-cols-5">
            <div className='lg:my-20 sm:my-5 lg:w-[300px] h-auto sm:w-40 bg-light-purple'> 
                <p className='text-start font-semibold text-dark-purple mt-16 ml-7'>Contact</p>
                <h1 className='font-bold mx-6 text-2xl text-white-normal text-start'>Get In Touch</h1>
                <h1 className='mx-6 text-left text-white-normal'>lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh</h1>
                <div className='flex flex-row justify-left my-5 mx-5 pl-3 items-center '>
                    <img className='' src={Ic_Whatsapp} />
                    <h1 className='font-semibold ml-4'>08218495092</h1>
                </div>
                <div className='flex flex-row justify-left my-5 mx-5 pl-3 items-center '>
                    <img src={Ic_Instagram} />
                    <h1 className='font-semibold ml-4'>@Seconhand.id</h1>
                </div>
                <div className='flex flex-row justify-left my-5 mx-5 pl-3 items-center '>
                    <img className='' src={Ic_facebook} />
                    <h1 className='font-semibold ml-4'>08218495092</h1>
                </div>

            </div>
            <div className="p-10 lg:w-[500px] sm:w-[300px] lg:h-auto mx-40 mt-14 text-left">
               
                <div class="flex flex-wrap mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        E-mail
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"></input>
                    <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Message
                    </label>
                    <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                    <button className= {`${type='light-grey' ? 'bg-medium-purple text-light-grey' : 'bg-transparent text-dark-purple'} font-semibold  py-2 px-4  rounded hover:text-dark-purple hover:bg-light-grey border border-dark-purple`}>
                       Send
                    </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>

            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs