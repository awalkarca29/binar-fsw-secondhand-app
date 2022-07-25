import ImageShoes from "../assets/sepatu_1.png";
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

const ListBuyerHistory = ({ id, image, category, createdAt, title, price, description }) => {
    return (
        <div class="mt-8 mr-8 p-4 rounded-lg shadow w-full inline-block bg-light-grey">
            <div className="grid grid-flow-col flex-row justify-start content-start items-start text-left">
                <div>
                    <img className='rounded-md my-5 mr-5 w-20 h-20 object-none' src={image} />
                </div>
                <div>
                    {/* <span className="text-xs font-semibold py-1 px-2 rounded text-dark-blue bg-light-blue ">
                        Fashion
                    </span> */}
                    <p class="font-semibold mt-4 text-left text-sm">
                        {title}
                    </p>
                    <p class="mt-1 text-sm text-left">
                        {description}
                    </p>
                </div>
                    
                <div class="inline-flex justify-end w-full">
                    <p class="text-xs text-grey mt-2 mr-2 text-right">
                        {createdAt}
                    </p>
                </div>
            </div>
            <div className="grid grid-flow-col flex-row">
                <p class="text-lg font-bold text-right text-purple mr-2">
                    Rp {price}
                </p>
            </div>
        </div>
    )
}

export default ListBuyerHistory;