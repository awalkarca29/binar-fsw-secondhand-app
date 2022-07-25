import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Navbar, Footer, ModalBuyer, ButtonCustom } from '../components';
import { Col, Row, Image } from 'antd';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
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

    const [modalNotificationVisible, setModalNotificationVisible] = useState(false);

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
        <div>
            <Navbar />
            <Row className="flex flex-row flex-wrap justify-center mt-24">
                <Col flex="auto">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            width={450}
                            height={450}
                            src={product.image}
                            className="my-8 object-cover" />
                    </div>
                </Col>
                <Col flex="auto">
                    <div className="flex flex-col items-center">
                        <div className="container flex flex-col justify-start items-start bg-light-grey drop-shadow-md rounded-md w-96 my-8 p-8">
                            <p className="text-md">{product.name}</p>
                            <p className="text-xs text-grey">{product.Category.name}</p>
                            <p className="text-black-normal text-lg font-bold">Rp. {product.price}</p>
                            <p className="text-black-normal font-semibold">Description Product</p>
                            <p className="text-left w-11/12">{product.description}</p>
                            <ButtonCustom
                                type="primary-large"
                                text="Buy"
                                action={() => setModalNotificationVisible(true)}
                                isSold={product.isSold}
                            />
                        </div>
                        <div className="container flex flex-row justify-start items-start bg-light-grey drop-shadow-md rounded-md w-96 my-2 p-8">
                            <Image
                                width={40}
                                height={40}
                                src={product.User.image}
                                className="object-cover rounded-full"
                            />
                            <div className="flex flex-col items-start px-4">
                                <p className="font-bold">{product.User.name}</p>
                                <p className="text-grey m-0">{product.User.city}</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Footer />
            {
                modalNotificationVisible ? (
                    <ModalBuyer
                        modalNotificationVisible={modalNotificationVisible}
                        setModalNotificationVisible={setModalNotificationVisible}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ) : null
            }
        </div>
    )
}

export default ProductDetail;