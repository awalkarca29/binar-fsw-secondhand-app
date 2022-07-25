import React, { useState, useEffect } from 'react';
import { NavbarLogin, Footer, ButtonCustom } from '../components';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ListSellerProduct, ListSellerHistory } from '../components';

function MyProductSeller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsByUserId = async () => {
      await axios.get(`https://final-project-fsw-3-kel-1.herokuapp.com/seller/product/0`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          setProducts(res.data.data);
        }).catch(err => {
          console.log(err);
        })
    };
    getProductsByUserId();
  }, []);

  return (
    <div>
      <NavbarLogin />
      <div className="lg:my-28 sm:mt-20 lg:mx-60">
        <Tab.Group>
          <Tab.List className='lg:w-auto sm:mx-14 sm:w-[540px] flex flex-col sm:flex-row bg-white-normal drop-shadow-lg rounded-lg'>
            <Tab className='px-4 py-2 -mb-px font-semibold text-purple border-b-2 border-dark-purple rounded-t opacity-50'> All Products</Tab>
            <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>Sold Out</Tab>
            <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>Reviewing</Tab>
            <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>History Seller</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className='mx-16 my-8'>
                <div className='flex justify-between'>
                  <h1 className='font-bold text-lg'>{products.length} product</h1>
                  <Link to="/add-product">
                    <ButtonCustom
                    type="primary"
                    text="Add New Product"
                    />
                  </Link>
                </div>
                {products.map((products) => (
                  <ListSellerProduct
                    id={products.id}
                    productName={products.name}
                    openPrice={products.price}
                    image={products.image}
                  />
                ))}

              </div>
            </Tab.Panel>
            <Tab.Panel>
              <h1>tabs 2</h1>
            </Tab.Panel>
            <Tab.Panel>
              <h1>tabs 3</h1>
            </Tab.Panel>
            <Tab.Panel>
              <ListSellerHistory
                buyerName='John '
                date='19 June 2022, 13:11'
                productName='Nike Shoes'
                openPrice='Rp.1.500.000'
                priceOffer='Rp. 1.000.000'
              />
              <ListSellerHistory
                buyerName='Dito '
                date='19 June 2022, 13:11'
                productName='Nike Shoes'
                openPrice='Rp.1.500.000'
                priceOffer='Rp. 900.000'
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <Footer />
    </div>
  )
}

export default MyProductSeller