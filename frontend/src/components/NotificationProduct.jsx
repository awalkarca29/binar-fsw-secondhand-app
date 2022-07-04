import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarLogin, ModalNotification } from '../components';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import IconStore from '../assets/ic_store.svg';
import IconLocation from '../assets/ic_location.svg';
import Seller from '../assets/il_seller.svg';

const NotificationProduct = ({ imgSrc, productName, openPrice, priceOffer,seller ,label, date }) => {
    const [modalNotificationVisible, setModalNotificationVisible] = useState(false);
    return (
        <div>
        <div class="mt-2 px-6 pb-5 bg-white-normal rounded-lg shadow lg:w-full sm:w-48 cursor-pointer hover:bg-soft-blue" onClick={() => setModalNotificationVisible(true)}>
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
        <Modal
                style={{
                    borderRadius: "12px",
                    overflow: "auto"
                }}
                width={780}
                title="Detail Transaksi"
                centered
                visible={modalNotificationVisible}
                onOk={() => setModalNotificationVisible(false)}
                onCancel={() => setModalNotificationVisible(false)}
                footer={null}
            >
                <div className="grid grid-rows-3 justify-end">
                    <div className="grid grid-flow-col auto-cols-auto">
                        <div>
                            <img src={imgSrc} className="rounded-full object-cover h-24 w-24" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg m-0 pb-1">{productName}</p>
                            <div className="flex flex-row items-center text-icon text-medium-purple mb-2">
                                <img src={IconStore} />
                                <p className="m-0 pl-2">{seller}</p>
                            </div>
                            <div className="flex flex-row items-center text-icon text-medium-purple mb-2">
                                <img src={IconLocation} />
                                <p className="m-0 pl-2">Jakarta</p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-md bg-success text-light-grey p-1 mb-2">Diterima</div>
                            <p className="text-grey">{date}</p>
                        </div>
                    </div>
                    <p className="text-sm m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus purus sit adipiscing sed odio. Vel at lorem netus dolor. Rutrum a vel feugiat molestie. Scelerisque pulvinar facilisis velit dui in ridiculus aliquet eget ultrices. Diam posuere leo, faucibus pellentesque mauris non. Erat varius posuere mi, convallis urna. Pretium at egestas tincidunt blandit morbi consectetur condimentum ornare.</p>
                    <div className="price-detail flex flex-col items-end">
                        <p className="line-through text-light-purple">Rp {openPrice}</p>
                        <p className="text-lg font-bold text-medium-purple">Rp. 5,000,000</p>
                    </div>
                </div>
            </Modal>
    </div>
    )
};


export default NotificationProduct