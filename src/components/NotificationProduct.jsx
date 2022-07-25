import React, { useState } from 'react';
import ModalNotification from './ModalNotification';

const NotificationProduct = ({ label, imgSrc, isSold, productImg, productName, seller, locationSeller, date, description, openPrice, finalPrice }) => {
    const [modalNotificationVisible, setModalNotificationVisible] = useState(false);
    return (
        <div>
            <div class="mt-2 px-6 pb-5 bg-light-grey rounded-lg shadow lg:w-full sm:w-80 cursor-pointer hover:bg-soft-blue" onClick={() => setModalNotificationVisible(true)}>
                <div class="inline-flex items-center justify-between w-full">
                    <div class="inline-flex items-center">
                        <img className='mt-10' src={imgSrc} />
                        <h3 class="font-semibold text-base text-grey ml-4 mt-2">{productName}</h3>
                        <p class="absolute font-semibold text-sm mt-24 ml-16">
                            Ditawar Rp. {finalPrice}
                        </p>
                        <p className='absolute ml-[560px] text-right mt-24 text-grey'>{date}</p>
                    </div>
                    <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-light-grey bg-medium-purple  last:mr-0 mr-1">
                        {label}
                    </span>
                    <p class="absolute text-sm mt-14 ml-16">
                        Rp. {openPrice}
                    </p>
                </div>
            </div>
            {
                modalNotificationVisible ? (
                    <ModalNotification
                        style={{
                            borderRadius: "12px",
                            overflow: "auto"
                        }}
                        width={780}
                        modalNotificationVisible={modalNotificationVisible}
                        setModalNotificationVisible={setModalNotificationVisible}
                        isSold={isSold}
                        imgSrc={productImg}
                        productName={productName}
                        seller={seller}
                        locationSeller={locationSeller}
                        date={date}
                        description={description}
                        openPrice={openPrice}
                        finalPrice={finalPrice}
                    />
                ) : null
            }
        </div >
    )
};


export default NotificationProduct