import React from 'react';
import { Navbar, Footer, ListOffer } from '../components';
import sepatu01 from "../assets/sepatu_1.png";
import Placeholder from "../assets/placeholder.svg";
import Arrow_left from "../assets/ic_arrow_left.svg";

function OfferInformation() {
  return (
    <div>
      <Navbar/>
      <div className='inline-flex'>
        <img className='mt-16' src={Arrow_left}/>
          <div className="mt-36 mb-7 relative lg:mx-36 sm:mx-20 bg-light-grey lg:w-[913px] sm:w-[500px] h-24  rounded-2xl text-black p-2 shadow-md ">
            <div className="mb-6">
              <img src={sepatu01} className="absolute ml-5 my-4 w-14 h-14 rounded-lg" alt="sepatu01"/>
            </div>
            <h3 className="text-dark-purple absolute mx-24 -my-2">Nike shoes</h3>
            <h1 className="absolute mx-24 text-base mt-5">Rp. 950.000</h1>
          </div>
      </div>
        <ListOffer
          imgSrc={Placeholder}
          nameOrder='John L'
          phone='082135867887'
          address='Jl. Hercules no.16 , Jawa Tengah'
          priceOffer='Rp.800,000'
        />
        <ListOffer
          imgSrc={Placeholder}
          nameOrder='John'
          phone='082854204240'
          address='Jl. Hercules no.01 , Jawa Tengah'
          priceOffer='Rp.750,000'
        />
        <ListOffer
          imgSrc={Placeholder}
          nameOrder='John L'
          phone='082135867887'
          address='Jl. Hercules no.16 , Jawa Tengah'
          priceOffer='Rp.700,000'
        />
        
      <Footer/>
    </div>
  )
}

export default OfferInformation