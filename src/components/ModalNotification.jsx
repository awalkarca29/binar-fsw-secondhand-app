import React from 'react';
import { Row, Col } from 'antd';

import IconClose from '../assets/ic_close.svg';
import IconStore from '../assets/ic_store.svg';
import IconLocation from '../assets/ic_location.svg';

const ModalNotification = ({ modalNotificationVisible, setModalNotificationVisible, isSold, imgSrc, productName, seller, locationSeller, date, description, openPrice, finalPrice }) => {
    return (
        <div>
            {modalNotificationVisible ? (
                <div>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 m-8 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-normal outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex flex-row content-center items-center p-5 rounded-t">
                                    <h3 className="text-xl text-black-normal mt-4 mx-[30%] font-bold">
                                        Transaction Detail
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black-normal inline-flex float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                                        onClick={() => setModalNotificationVisible(false)}
                                    >
                                        <img src={IconClose} className="w-6" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="p-6 mx-8 mb-8 rounded-md flex-col shadow-md">
                                    <Row className="flex flex-row justify-between items-center">
                                        <Col span="auto" className="flex flex-row">
                                            <div className="mx-2">
                                                <img src={imgSrc} className="rounded-full object-cover h-24 w-24" />
                                            </div>
                                            <div className="mx-2">
                                                <p className="font-medium mb-2">{productName}</p>
                                                <div className="flex flex-row items-center text-icon text-medium-purple mb-1">
                                                    <img src={IconStore} />
                                                    <p className="m-0 pl-2">{seller}</p>
                                                </div>
                                                <div className="flex flex-row items-center text-icon text-medium-purple mb-1">
                                                    <img src={IconLocation} />
                                                    <p className="m-0 pl-2">{locationSeller}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span="auto" className="m-4">
                                            <div>
                                                <div className={isSold ? `rounded-md bg-success text-light-grey p-1 mb-2` : `rounded-md bg-danger text-light-grey p-1 mb-2`}>
                                                    {isSold ?
                                                        `Accepted` : `Declined`
                                                    }
                                                </div>
                                                <p className="text-grey">{date}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p className="text-left leading-relaxed mt-2">
                                            {description}
                                        </p>
                                    </Row>
                                    <Row>
                                        <Col className="price-detail w-full flex flex-col items-end">
                                            <p className="line-through text-light-purple mb-2">Rp. {openPrice}</p>
                                            <p className="text-lg font-bold text-medium-purple">Rp. {finalPrice}</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* overlay */}
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}
        </div>
    )
}

export default ModalNotification;