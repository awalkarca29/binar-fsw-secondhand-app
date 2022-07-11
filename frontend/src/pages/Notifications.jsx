import React from 'react'
import { NavbarLogin, NotificationProduct} from '../components';
import  Notifications_img  from '../assets/il_notifications.svg'; 
import Seller from '../assets/il_seller.svg';
import Buyer from '../assets/il_buyer.svg';
import { Tab } from '@headlessui/react';

function notifications() {
  return (
    <div>
        <NavbarLogin/>
        <div className="grid grid-cols-4 gap-2 mx-10">
          <div className="my-40 lg:ml-20 ">
            <img src={Notifications_img} />
          </div>
          <div className="col-span-3 lg:mt-28  sm:mt-20 lg:mx-32">
            <h1 className='text-dark-purple font-bold lg:text-2xl sm:text-sm text-left p-3'>Notifications</h1>
            <Tab.Group>
                  <Tab.List className='lg:w-full sm:w-80 flex flex-col sm:flex-row bg-white-normal drop-shadow-lg rounded-t-lg'>
                      <Tab className='px-4 py-2 -mb-px font-semibold text-purple border-b-2 border-dark-purple rounded-t opacity-50'> All</Tab>
                      <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>Seller</Tab>
                      <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>Buyer</Tab>
                  </Tab.List>
                  <Tab.Panels>
                      <Tab.Panel>
                        <NotificationProduct
                          imgSrc={Seller}
                          category='Fashion'
                          productName='Yeezy Boots'
                          openPrice='5,800,000'
                          priceOffer='5,000,000'
                          seller = 'Tokoku'
                          label='Offer Product'
                          date='20 June 2022, 14:04'
                        />
                        <NotificationProduct
                          imgSrc={Buyer}
                          category='Fashion'
                          productName='Yeezy Boots'
                          openPrice='5,800,000'
                          priceOffer='5,000,000'
                          seller = 'Jastipyn'
                          label='Offer Product'
                          date='20 June 2022, 14:04'
                        />
                      </Tab.Panel>
                      <Tab.Panel>
                      <NotificationProduct
                          imgSrc={Seller}
                          category='Fashion'
                          productName='Yeezy Boots'
                          openPrice='5,800,000'
                          priceOffer='5,000,000'
                          seller = 'Jastipyn'
                          label='Offer Product'
                          date='20 June 2022, 14:04'
                        />
                      </Tab.Panel>
                      <Tab.Panel>
                        <NotificationProduct
                            imgSrc={Buyer}
                            category='Fashion'
                            productName='Yeezy Boots'
                            openPrice='5,800,000'
                            priceOffer='5,000,000'
                            label='Offer Product'
                            date='20 June 2022, 14:04'
                          />
                      </Tab.Panel>
                  </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
    </div>
  )
}

export default notifications