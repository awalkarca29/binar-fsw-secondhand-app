import React from 'react';
import { NavbarLogin, Footer } from '../components';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Placeholder } from 'phosphor-react';

function MyProductSeller() {
  return (
    <div>
      <NavbarLogin/>
      <div className="lg:my-40 sm:mt-20 lg:mx-72">
            <Tab.Group>
                  <Tab.List className='lg:w-[800px] sm:w-80 flex flex-col sm:flex-row bg-white-normal drop-shadow-lg rounded-lg'>
                      <Tab className='px-4 py-2 -mb-px font-semibold text-purple border-b-2 border-dark-purple rounded-t opacity-50'> All Products</Tab>
                      <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>Sold Out</Tab>
                      <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>Reiviewing</Tab>
                      <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>History Seller</Tab>
                  </Tab.List>
                  <Tab.Panels>
                      <Tab.Panel>
                        <div className='flex justify-between'>
                          <h1>40 product</h1>
                          <Link to="/add-product">
                            <button className="bg-medium-purple text-light-grey font-semibold  lg:py-2 lg:px-4 sm:py-1 sm:px-2 text-sm rounded-lg hover:text-dark-purple hover:bg-light-grey border border-dark-purple"
                            type="button"
                            >
                              Add New Product
                            </button>
                          </Link>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <h1>tabs 2</h1>
                      </Tab.Panel>
                      <Tab.Panel>
                        <h1>tabs 3</h1>
                      </Tab.Panel>
                      <Tab.Panel>
                      {/* <ListOffer
                        imgSrc={Placeholder}
                        nameOrder='John L'
                        imgProduct= {Placeholder}
                        price='Rp.700,000'
                        priceOffer='Rp.600,000'
                      /> */}
                      </Tab.Panel>
                  </Tab.Panels>
            </Tab.Group>
      </div>
      <Footer/>
    </div>
  )
}

export default MyProductSeller