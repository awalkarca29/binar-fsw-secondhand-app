import { useState, useEffect, useRef } from 'react';
import { Navbar, CardProduct, MenuFilter, Footer } from '../components';
import { Col, Row } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductSearch = () => {
    let keyword = localStorage.getItem("keyword");
    // let { keyword } = useParams();

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
            <br /><br /><br /><br />
            <h3 className="text-xl text-black-normal font-semibold mt-8 mx-8">This is the result for your wanted product.</h3>
            <Row className="flex flex-wrap">
                <Col flex="auto">
                    <MenuFilter />
                </Col>
                <Col span={18}>
                    <div className="flex flex-wrap justify-center">
                        {
                            products.map((products) => {
                                if (products.name.toLowerCase().includes(keyword.toLowerCase())) {
                                    return (
                                        <CardProduct
                                            id={products.id}
                                            imgSrc={products.image}
                                            category={products.Category.name}
                                            title={products.name}
                                            price={products.price}
                                            location={products.User.city}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default ProductSearch;