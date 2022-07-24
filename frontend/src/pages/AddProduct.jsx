import React, { useState } from 'react';
import axios from 'axios';
import { NavbarLogin, Footer, ButtonCustom, InputForm } from '../components';
import { Select, Upload, Button, message, Spin } from 'antd';
import ic_image from '../assets/ic_image.svg';
import ic_arrow_left from "../assets/ic_arrow_left.svg";
import { Link, Navigate } from 'react-router-dom';

const { Option } = Select;

function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    categoryId: '',
    image: '',
  });

  const [navigate, setNavigate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios({
      url: "https://final-project-fsw-3-kel-1.herokuapp.com/seller/product/",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: newProduct
    })
      .then(() => {
        message.success("Product successfully added!")
        setNavigate(true);
      }).catch(err => {
        message.error("Failed to add product!")
        console.log(err);
      })
  }
  console.log("NEW PRODUCT: ", newProduct);

  if (navigate) {
    return (
      <Navigate to="/myproduct-seller" />
    )
  }

  return (
    <div>
      <NavbarLogin />
      <Link to="/myproduct-seller">
        <img className='lg:mt-40 sm:mt-36 lg:mx-12 sm:mx-5 absolute cursor-pointer' src={ic_arrow_left} />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 md:gap-2 mx-10">
          <div className=" lg:my-48 sm:mt-40 sm:mb-24 lg:ml-20 lg:mx-60 sm:mx-16 rounded-lg shadow-lg bg-light-grey lg:h-72 sm:h-56 lg:w-full sm:w-80">
            <Upload.Dragger
              listType="picture"
              maxCount={1}
              showUploadList={{ showRemoveIcon: true }}
              accept=".png, .jpeg, .jpg"
              beforeUpload={(file) => {
                setNewProduct({
                  ...newProduct, image: file
                })
                return false;
              }}
              iconRender={() => {
                return (
                  <Spin />
                )
              }}
              progress={{
                strokeColor: {
                  '0%': '#363062',
                  '100%': '#827397',
                },
                strokeWidth: 3,
                style: { top: 12 }
              }}
            >
              <img className='mx-auto sm:w-10 my-4' src={ic_image} />
              <Button

              >Select Photos</Button>
              <h1 className='mt-2'>Or drag photos here</h1>
              <p className='text-grey text-sm'>You can upload 1 photo of the product</p>
            </Upload.Dragger>
          </div>
          <div className="lg:col-span-2 lg:my-40 lg:mx-32 mb-12 sm:w-96 lg:w-auto sm:mx-8 rounded-lg shadow-lg bg-light-grey py-6 h-auto flex flex-col justify-center items-center">
            <h1 className='text-dark-purple font-bold lg:text-lg sm:text-base'>Item Details</h1>
            <Select
              defaultValue="Select a Category"
              style={{
                width: '80%',
                border: 100,
                margin: "12px 48px"
              }}
              onChange={(value) => setNewProduct({ ...newProduct, categoryId: Number(value) })}
            >
              <Option value="1">Fashions</Option>
              <Option value="2">Electronics</Option>
              <Option value="3">Spareparts</Option>
              <Option value="4">Furnitures</Option>
              <Option value="5">Others</Option>
            </Select>
            <InputForm
              type="text"
              name="name"
              placeholder="Product Name"
              action={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <InputForm
              type="text"
              name="price"
              placeholder="450000"
              action={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            />
            <InputForm
              type="textarea"
              name="description"
              placeholder="Description of the product"
              action={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
            <div className='my-6 mx-14 flex justify-end'>
              <ButtonCustom
                type="secondary"
                text="Cancel"
              />
              <ButtonCustom
                type="primary"
                text="Add Product"
              />
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  )
}

export default AddProduct