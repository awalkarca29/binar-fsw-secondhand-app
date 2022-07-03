import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarLogin, ModalNotification } from '../components';

const NotificationProduct = ({ imgSrc, productName, openPrice, priceOffer, label, date }) => (
    <div class="mt-2 px-6 pb-5 bg-white-normal rounded-lg shadow lg:w-full sm:w-48 cursor-pointer hover:bg-soft-blue">
        <div class="inline-flex items-center justify-between w-full">
            <div class="inline-flex items-center">
            <img className='mt-10' src={imgSrc} />
            <h3 class="font-semibold text-base text-grey ml-4 mt-2">{productName}</h3>
            <p class="absolute font-semibold text-sm mt-24 ml-16">
                Ditawar {priceOffer}
            </p>
            <p className='absolute ml-[520px] mt-24 text-grey'>{date}</p>
            </div>
            <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-light-grey bg-medium-purple  last:mr-0 mr-1">
                {label}
            </span>
            <p class="absolute text-sm mt-14 ml-16">
                {openPrice}
            </p>
        </div>
    </div>

);


export default NotificationProduct