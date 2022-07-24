import { Col, message } from "antd";
import IconDelete from "../assets/ic_delete.svg";
import IconEdit from "../assets/ic_edit.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ButtonCustom from "./ButtonCustom";

const ListSellerProduct = ({ id, productName, openPrice, image }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProductsByUserId = async () => {
            await axios.get(`https://final-project-fsw-3-kel-1.herokuapp.com/seller/product/0`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    setProducts(res.data.data);
                }).catch(err => {
                    console.log(err);
                })
        };
        getProductsByUserId();
    }, []);

    const handleDelete = (id) => {
        let data = [...products];
        let filteredData = data.filter((products) => products.id != id);

        axios.delete(`https://final-project-fsw-3-kel-1.herokuapp.com/seller/product/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                message.success("Product successfully deleted!");
            }).catch(err => {
                console.log(err);
            })

        setProducts(filteredData);
    }

    return (
        <div className="flex flex-row items-center justify-between text-left bg-light-grey rounded-xl p-4 m-4 border border-grey">
            <div className="flex flex-row items-center">
                <Col span="auto" className="mr-6">
                    <img className='rounded-md my-5 ml-5 w-20 h-20 object-fill' src={image} />
                </Col>
                <Col span="auto" className="mr-6">
                    <p className="font-semibold text-lg my-2">{productName}</p>
                    <h4 className="text-lg">Rp {openPrice}</h4>
                </Col>
            </div>
            <Col className="btn-group flex flex-row justify-center">
                <div>
                    <ButtonCustom
                        type="icon-only"
                        bgColor="danger"
                        icon={IconDelete}
                        action={() => handleDelete(id)}
                    />
                </div>
                <Link to={`/update-product/${id}`}>
                    <ButtonCustom
                        type="icon-only"
                        bgColor="light-purple"
                        icon={IconEdit}
                    />
                </Link>
                <Link to="/offer-information">
                    <ButtonCustom
                        type="primary"
                        text="Bid Info"
                    />
                </Link>
            </Col>
        </div>
    )
}
export default ListSellerProduct;