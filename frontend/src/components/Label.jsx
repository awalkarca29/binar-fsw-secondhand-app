import React from 'react';
import { Circle } from 'phosphor-react';

function Label() {
  return (
    <div >
        <label className="block ml-10">
            <input type="email" name="email" className="w-28 h-9 sm:h-15 mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="placeholder" />
            <input type="email" name="email" className="w-80 mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="placeholder" />
            <Circle className=" ml-72 -mt-9" size={24} color="#d9d9d9" weight="fill" />
        </label>
        <br/>
        <label className="block ml-10">
            <input type="email" name="email" className="w-28 mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="placeholder" />
            <input type="email" name="email" className="w-80 mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="placeholder" />
            <Circle className=" ml-72 -mt-9" size={24} color="#d9d9d9" weight="fill" />
        </label>
        <br/>

        <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-dark-blue bg-light-blue  last:mr-0 mr-1">
          Placeholder
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-light-grey bg-medium-purple  last:mr-0 mr-1">
          Product Offer
        </span>
        <span className="text-xs w-24 font-semibold inline-block py-1 px-2  rounded text-light-grey bg-dark-blue last:mr-0 mr-1">
          Order Status
        </span>
        <span className="text-xs w-16 font-semibold inline-block py-1 px-2  rounded text-light-grey bg-success last:mr-0 mr-1">
          Received
        </span>
        <span className="text-xs w-16 font-semibold inline-block py-1 px-2  rounded text-light-grey bg-danger last:mr-0 mr-1">
          Rejected
        </span>
    </div>
    
  )
}

export default Label