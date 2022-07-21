import { useState, useEffect } from 'react';
import { Navbar, CardProduct, CarouselHeadline, Footer, ModalNotification } from '../components';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    const getProduct = () => {
        axios.get('https://final-project-fsw-3-kel-1.herokuapp.com/api/v1/product/')
            .then(res => {
                setProducts(res.data.data);
            }).catch(err => {
                console.log(err);
            })
    };

    useEffect(() => getProduct(), []);
    
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
                        title={products.name}
                        price={products.price}
                        location='East Jakarta'
                    />
                ))
                }
            </div>
            <ModalNotification
                imgSrc='https://images.unsplash.com/photo-1657438224944-f357bd0b0254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
                category='Fashion'
                productName='Yeezy Boost'
                openPrice='5,800,000'
                finalPrice='5,000,000'
                seller='Tokoku'
                locationSeller='Semarang'
                label='Offer Product'
                date='20 June 2022, 14:04'
            />
            <Footer />
        </div>
    )
}

export default Home;