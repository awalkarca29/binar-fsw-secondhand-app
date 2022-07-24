import { Navbar,NavbarLogin, CardProduct, CarouselHeadline, Footer, ModalNotification } from '../components';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [products, setProducts] = useState([]);

    const getProduct = () => {
        axios.get('https://final-project-fsw-3-kel-1.herokuapp.com/product/')
            .then(res => {
                setProducts(res.data.data);
            }).catch(err => {
                console.log(err);
            })
    };

    useEffect(() => getProduct(), []);

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            setIsLogin(true);
        }else {
            setIsLogin(false);
        }
    }, []);
    return (
        <div>
            {isLogin ?(
                <NavbarLogin />
            ) : (
                <Navbar/>
            )
            }
            <br /><br /><br />
            <CarouselHeadline />
            <h2 className="text-3xl text-dark-purple font-bold my-8">Explore Our Valuable Products</h2>
            <div className="flex flex-wrap justify-center">
                {products.map((products) => (
                    <CardProduct
                        id={products.id}
                        imgSrc={products.image}
                        category={products.Category.name}
                        title={products.name}
                        price={products.price}
                        location='East Jakarta'
                    />
                ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home;