import React from 'react';
import {  ModalOffer } from '../components';

const ListOffer= ({ imgSrc, nameOrder, phone, address, priceOffer }) => {
  return (
    <div className='flex justify-center'>
        <div class="lg:mt-2 sm:mt-1 my-5 px-6 pb-5 bg-light-grey rounded-lg shadow lg:w-[913px] sm:w-[500px]">
            <div class="inline-flex items-center justify-between w-full">
                <img className='mt-14 cursor-pointer' src={imgSrc} />
                <h3 class="absolute font-semibold lg:text-base sm:text-sm text-black-normal ml-16">{nameOrder}</h3>
                <p class="absolute lg:text-sm sm:text-xs mt-14 ml-16">{phone}</p>
                <p class="absolute lg:text-sm sm:text-xs mt-[6rem] ml-16">{address}</p>
                <p class="absolute lg:text-sm mt-[9rem] sm:text-xs ml-16">Ditawar {priceOffer}</p>
            </div>
            <div class="flex items-center justify-end">
                <div class="flex items-center">
                    <button className="bg-transparent text-dark-purple font-semibold lg:py-2 lg:px-4 sm:py-1 sm:px-2 border mx-3 border-dark-purple rounded-lg text-sm hover:text-light-grey hover:bg-medium-purple">
                        Reject
                    </button>
                    <ModalOffer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListOffer