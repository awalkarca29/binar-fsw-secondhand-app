import { Navbar, CardProduct, CarouselHeadline, Footer } from '../components';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        await axios({
            url: "https://final-project-fsw-3-kel-1.herokuapp.com/product/",
            method: "GET"
        })
            .then(res => {
                setProducts(res.data.data);
            }).catch(err => {
                console.log(err);
            })
    };

    const ref = useRef(getProduct);

    useEffect(() => { ref.current() }, []);

    return (
        <div>
            <Navbar />
            <br /><br /><br />
            <CarouselHeadline />
            <h2 className="text-3xl text-dark-purple font-bold my-8">Explore Our Valuable Products</h2>
            <div className="flex flex-wrap justify-center">
                {products.map((products) => (
                    <CardProduct
                        id={products.id}
                        imgSrc={products.image}
                        category={products.Category.name}
                        title={products.title}
                        price={products.price}
                        location={products.User.city}
                    />
                ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home;