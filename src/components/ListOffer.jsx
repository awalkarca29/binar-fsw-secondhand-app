import React, { useState, useEffect, useRef } from 'react';
import { ModalOffer, ButtonCustom } from '../components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListOffer = ({ imgSrc, nameOrder, phone, address, priceOffer }) => {
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

    const [showModal, setShowModal] = useState(false);

    let { id } = useParams();

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

    const ref = useRef(getSpecificProduct)

    useEffect(() => { ref.current() }, []);

    return (
        <div className='flex justify-center'>
            <div class="lg:mt-2 sm:mt-1 my-5 px-6 pb-5 bg-light-grey rounded-lg shadow lg:w-[913px] sm:w-[500px]">
                <div class="inline-flex items-center justify-between w-full">
                    <img className='mt-14 cursor-pointer' src={imgSrc} />
                    <h3 class="absolute font-semibold lg:text-base sm:text-sm text-black-normal ml-16">User ID: {nameOrder}</h3>
                    {/* <p class="absolute lg:text-sm sm:text-xs mt-14 ml-16">{phone}</p>
                <p class="absolute lg:text-sm sm:text-xs mt-[6rem] ml-16">{address}</p> */}
                    <p class="absolute lg:text-base font-semibold text-medium-purple mt-[4rem] sm:text-xs ml-16">Ditawar Rp. {priceOffer}</p>
                </div>
                <div class="flex items-center justify-end">
                    <div class="flex items-center">
                        <button className="bg-transparent text-dark-purple font-semibold lg:py-2 lg:px-4 sm:py-1 sm:px-2 border mx-3 border-dark-purple rounded-lg text-sm hover:text-light-grey hover:bg-medium-purple">
                            Decline
                        </button>
                        <ModalOffer />
                        <ButtonCustom
                            type="accept-bargain"
                            text="Buy"
                            action={() => setShowModal(true)}
                            isSold={product.isSold}
                        />
                    </div>
                </div>
            </div>
            {showModal ? (
                <ModalOffer
                    showModal={showModal}
                    setShowModal={setShowModal}
                    buyerId={nameOrder}
                    productImage={product.image}
                    productName={product.name}
                    productPrice={product.price}
                    bargainPrice={priceOffer}
                    sellerPhone={phone}
                />
            ) : null}
        </div>
    )
}

export default ListOffer