import React, { useState } from 'react';
import ModalNotification from './ModalNotification';

const NotificationProduct = ({ label, imgSrc, productName, seller, locationSeller, date, openPrice, finalPrice }) => {
    const [modalNotificationVisible, setModalNotificationVisible] = useState(false);
    return (
        <div>
            <div class="mt-2 px-6 pb-5 bg-white-normal rounded-lg shadow lg:w-full sm:w-48 cursor-pointer hover:bg-soft-blue" onClick={() => setModalNotificationVisible(true)}>
                <div class="inline-flex items-center justify-between w-full">
                    <div class="inline-flex items-center">
                        <img className='mt-10' src={imgSrc} />
                        <h3 class="font-semibold text-base text-grey ml-4 mt-2">{productName}</h3>
                        <p class="absolute font-semibold text-sm mt-24 ml-16">
                            Ditawar {finalPrice}
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
            {modalNotificationVisible ? (
                <ModalNotification
                    modalNotificationVisible={modalNotificationVisible}
                    setModalNotificationVisible={setModalNotificationVisible}
                    imgSrc='https://images.unsplash.com/photo-1657438224944-f357bd0b0254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
                    productName={productName}
                    seller={seller}
                    locationSeller={locationSeller}
                    date={date}
                    openPrice={openPrice}
                    finalPrice={finalPrice}
                />
            ) : null}
        </div>
    )
};


export default NotificationProduct