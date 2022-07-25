import React, { useState, useEffect, useRef } from 'react'
import { Footer, Navbar, NotificationProduct } from '../components';
import ImageNotifications from '../assets/il_notifications.svg';
import Seller from '../assets/il_seller.svg';
import Buyer from '../assets/il_buyer.svg';
import { Tab } from '@headlessui/react';
import axios from 'axios';

const Notifications = () => {
  const [notifSeller, setNotifSeller] = useState([{
    Product: {
      name: '',
      price: '',
      isSold: ''
    },
    price: '',
    User: {
      name: '',
      city: ''
    },
    createdAt: ''
  }]);

  const [notifBuyer, setNotifBuyer] = useState([{
    Product: {
      name: '',
      price: '',
      isSold: false
    },
    price: '',
    User: {
      name: '',
      city: ''
    },
    createdAt: ''
  }]);

  const getNotificationsSeller = async () => {
    await axios({
      url: "https://final-project-fsw-3-kel-1.herokuapp.com/notification/seller",
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        setNotifSeller(res.data.data);
      }).catch(err => {
        console.log(err);
      })
  };

  const ref = useRef(getNotificationsSeller);

  useEffect(() => { ref.current() }, []);

  useEffect(() => {
    const getNotificationsBuyer = async () => {
      await axios({
        url: "https://final-project-fsw-3-kel-1.herokuapp.com/notification/buyer",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          setNotifBuyer(res.data.data);
        }).catch(err => {
          console.log(err);
        })
    };
    getNotificationsBuyer();
  }, [])

  console.log('INI NOTIF: ', notifSeller);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-2 mx-10">
        <div className="my-40 lg:ml-20 ">
          <img src={ImageNotifications} />
        </div>
        <div className="col-span-3 lg:mt-28 sm:mt-20 lg:mx-32">
          <h1 className='text-dark-purple font-bold lg:text-2xl sm:text-sm text-left p-3'>Notifications</h1>
          <Tab.Group>
            <Tab.List className='lg:w-full sm:w-80 flex flex-col sm:flex-row bg-white-normal drop-shadow-lg rounded-t-lg'>
              <Tab className='px-4 py-2 -mb-px font-semibold text-purple border-b-2 border-dark-purple rounded-t opacity-50'> All</Tab>
              <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>Seller</Tab>
              <Tab className='text-purple py-4 px-6 block hover:text-medium-blue focus:outline-none'>Buyer</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                {
                  notifSeller ? (
                    notifSeller.map((notif) => (
                      <NotificationProduct
                        label="Offer Product"
                        imgSrc={Seller}
                        isSold={notif.Product.isSold}
                        productImg={notif.Product.image}
                        productName={notif.Product.name}
                        seller={notif.User.name}
                        locationSeller={notif.User.city}
                        date={notif.createdAt}
                        description={notif.Product.description}
                        openPrice={notif.Product.price}
                        finalPrice={notif.price}
                      />
                    ))
                  ) : null
                }
                {
                  notifBuyer ? (
                    notifBuyer.map((notif) => (
                      <NotificationProduct
                        label="Offer Product"
                        imgSrc={Seller}
                        productImg={notif.Product.image}
                        productName={notif.Product.name}
                        seller={notif.User.name}
                        locationSeller={notif.User.city}
                        date={notif.createdAt}
                        description={notif.Product.description}
                        openPrice={notif.Product.price}
                        finalPrice={notif.price}
                      />
                    ))
                  ) : null
                }
              </Tab.Panel>
              <Tab.Panel>
                {
                  notifSeller ? (
                    notifSeller.map((notif) => (
                      <NotificationProduct
                        label="Offer Product"
                        imgSrc={Seller}
                        isSold={notif.Product.isSold}
                        productImg={notif.Product.image}
                        productName={notif.Product.name}
                        seller={notif.User.name}
                        locationSeller={notif.User.city}
                        date={notif.createdAt}
                        description={notif.Product.description}
                        openPrice={notif.Product.price}
                        finalPrice={notif.price}
                      />
                    ))
                  ) : null
                }
              </Tab.Panel>
              <Tab.Panel>
                {
                  notifBuyer ? (
                    notifBuyer.map((notif) => (
                      <NotificationProduct
                        label="Offer Product"
                        imgSrc={Seller}
                        productImg={notif.Product.image}
                        productName={notif.Product.name}
                        seller={notif.User.name}
                        locationSeller={notif.User.city}
                        date={notif.createdAt}
                        description={notif.Product.description}
                        openPrice={notif.Product.price}
                        finalPrice={notif.price}
                      />
                    ))
                  ) : null
                }
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Notifications