import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Footer, ListOffer } from '../components';
import sepatu01 from "../assets/sepatu_1.png";
import Placeholder from "../assets/placeholder.svg";
import Arrow_left from "../assets/ic_arrow_left.svg";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function OfferInformation() {
  let { id } = useParams();

  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    Category: {
      name: ''
    },
    image: '',
    description: '',
    User: {
      image: '',
      name: ''
    }
  });

  const [bidInfo, setBidInfo] = useState([{
    price: '',
    Product: {
      name: '',
      price: '',
      image: ''
    },
    buyerId: ''
  }]);

  useEffect(
    () => {
      const getSpecificProduct = async () => {
        await axios({
          url: `https://final-project-fsw-3-kel-1.herokuapp.com/product/${id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => {
            setProduct(res.data.data);
          }).catch(err => {
            console.log(err);
          })
      };
      const getBidInfo = async () => {
        await axios({
          url: `https://final-project-fsw-3-kel-1.herokuapp.com/seller/product/${id}/info`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => {
            setBidInfo(res.data.data);
          }).catch(err => {
            console.log(err);
          })
      };

      getSpecificProduct();
      getBidInfo();
    }, [])

  console.log('BID INFO: ', bidInfo);

  return (
    <div>
      <Navbar />
      <div className='inline-flex items-center'>
        <Link to="/myproduct-seller">
          <img className='lg:mt-28 sm:mt-28 cursor-pointer' src={Arrow_left} />
        </Link>
        <div className="mt-36 mb-7 relative lg:mx-36 sm:mx-20 bg-light-grey lg:w-[913px] sm:w-[500px] h-24  rounded-2xl text-black p-2 shadow-md ">
          <div className="mb-6">
            <img src={sepatu01} className="absolute ml-5 my-4 w-14 h-14 rounded-lg" alt="sepatu01" />
          </div>
          <h3 className="text-dark-purple absolute mx-24 -my-2">{product.name}</h3>
          <h1 className="absolute mx-24 text-base font-semibold mt-5">Rp. {product.price}</h1>
        </div>
      </div>
      {
        bidInfo.map((info) => (
          <ListOffer
            imgSrc={Placeholder}
            nameOrder={info.buyerId}
            phone='082135867887'
            address='Jl. Hercules no.16 , Jawa Tengah'
            priceOffer={info.price}
          />
        ))
      }
      <Footer />
    </div>
  )
}

export default OfferInformation