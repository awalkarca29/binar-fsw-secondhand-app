import React from 'react';
import placeholder from "../assets/placeholder.svg";
import sepatu_01 from "../assets/sepatu_1.png";

const ListSellerHistory = ({ type, buyerName, productName, openPrice, priceOffer, date }) => {
  return (
    <div class="mt-6 shadow lg:w-[700px] sm:w-[560px] inline-block bg-light-grey">
      <div class="inline-flex items-center justify-between w-full ">
        <div class="inline-flex items-center my-1 mx-3">
          <img className='pr-4 w-12' src={placeholder} />
          <h3 class="font-semibold text-sm mt-2 text-black-normal">{buyerName}</h3>
        </div>
        <p class="text-xs text-grey mt-2 mx-5">
          {date}
        </p>
      </div>
      <div className='flex items-center mr-96'>
        <img className='rounded-md my-5 mx-5 w-16 h-16' src={sepatu_01} />
        <div className='mt-4 text-left'>
          <span className="text-xs  font-semibold py-1 px-2 rounded text-dark-blue bg-light-blue ">
            Fashion
          </span>
          <p class="font-semibold mt-1 text-sm">
            {productName}
          </p>
          <p class="text-sm font-bold text-purple">
            {openPrice}
          </p>
          <p class="mt-1 text-sm">
            Ditawar {priceOffer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ListSellerHistory