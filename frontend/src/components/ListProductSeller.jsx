import React from 'react';
import placeholder from "../assets/Placeholder.svg";
import sepatu_01 from "../assets/sepatu-01.png";

function ListProductSeller() {
  return (
    <div class="mt-2 shadow w-[1039px] inline-block bg-light-grey">
      <div class="inline-flex border-2 border-grey items-center justify-between w-full ">
        <div class="inline-flex items-center my-1 mx-3">
          <img className='pr-4 w-12' src={placeholder} />
          <h3 class="font-semibold text-sm mt-2 text-black-normal">Nama Pembeli</h3>
        </div>
        <p class="text-xs text-grey mt-2 mx-5">
          19 June 2022, 13:11
        </p>
      </div>
      <div className='flex items-center mr-96'>
        <img className='rounded-md my-5 mx-5 w-20 h-20' src={sepatu_01} />
        <div className='mt-4'>
          <span className="text-xs mr-96 font-semibold mt-20 py-1 px-2 rounded text-dark-blue bg-light-blue ">
            Fashion
          </span>
          <p class="font-semibold mr-[350px] mt-1 text-sm">
            Product Name
          </p>
          <p class="text-sm font-bold mr-[370px] text-purple">
            Rp 150.000
          </p>
          <p class="mt-1 text-sm mr-80">
            Ditawar Rp 130.000
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default ListProductSeller