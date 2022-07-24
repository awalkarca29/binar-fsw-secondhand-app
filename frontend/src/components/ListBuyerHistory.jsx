import ImageShoes from "../assets/sepatu_1.png";
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const ListBuyerHistory = ({ id, imgSrc, category, title, price, description }) => {
    // const [products, setHistory] = useState({
    //     id: '',
    //     name: '',
    //     price: '',
    //     Category: {
    //         name: ''
    //     },
    //     image: '',
    //     description: '',
    // });
    
    
    // await axios({
    //     url: `https://final-project-fsw-3-kel-1.herokuapp.com/auth/history`,
    //     method: "GET",
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem('token')}`
    //     },
        // data: products
    // })

    return (
        <div class="mt-8 mr-8 p-4 rounded-lg shadow w-full inline-block bg-light-grey">
            <div className="grid grid-flow-col flex-row justify-start content-start items-start text-left">
                <div>
                    <img className='rounded-md my-5 mr-5 w-20 h-20 object-none' src={imgSrc} />
                </div>
                <div>
                    <span className="text-xs font-semibold py-1 px-2 rounded text-dark-blue bg-light-blue ">
                        {category}
                    </span>
                    <p class="font-semibold mt-4 text-left text-sm">
                        {title}
                    </p>
                    <p class="mt-1 text-sm text-left">
                        {description}
                    </p>
                </div>
                <div class="inline-flex items-center justify-end w-full ">
                    <p class="text-xs text-grey mt-2 mr-2">
                        19 June 2022, 13:11
                    </p>
                </div>
            </div>
            <div className="grid grid-flow-col flex-row">
                <p class="text-lg font-bold text-right text-purple mr-2">
                    {price}
                </p>
            </div>
        </div>
    )
}

export default ListBuyerHistory;