import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Navbar, Footer, ModalBuyer } from '../components';
import { Col, Row, Image } from 'antd';
import { useParams } from 'react-router-dom';

const ProductDetail = (type) => {
    let { id } = useParams();

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

    const getSpecificProduct = () => {
        axios.get(`https://final-project-fsw-3-kel-1.herokuapp.com/product/${id}`)
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
            <br /><br /><br /><br />
            <Row className="flex flex-row flex-wrap justify-center">
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
                            <button onClick={() => setModalNotificationVisible(true)} className={`${type = 'light-grey' ? 'bg-medium-purple text-light-grey' : 'bg-transparent text-dark-purple'} text-center items-center md:w-80 w-full sm:text-sm hover:text-dark-purple hover:bg-light-grey border border-dark-purple font-bold py-2 md:px-4 rounded flex justify-center mt-4`}>
                                <span>Buy</span>
                            </button>
                        </div>
                        <div className="container flex flex-row justify-start items-start bg-light-grey drop-shadow-md rounded-md w-96 my-2 p-8">
                            <Image
                                width={40}
                                src={product.User.image}
                                className="object-fill rounded-full"
                            />
                            <div className="flex flex-col items-start px-4">
                                <p className="font-bold">{product.User.name}</p>
                                <p className="text-grey m-0">Kota</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <br /><br /><br /><br />
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