import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { NavbarLogin, Footer, ButtonCustom } from '../components';
import { Select, Upload, Button, message, Spin } from 'antd';
import ic_image from '../assets/ic_image.svg';
import ic_arrow_left from "../assets/ic_arrow_left.svg";
import { Link, Navigate } from 'react-router-dom';

const { Option } = Select;

function UpdateProduct() {
  // const [newProduct, setNewProduct] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [image, setImage] = useState('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5d8ef7e0-690b-4284-bd8b-6529dc44f309/kyrie-infinity-ep-basketball-shoes-QJ01t9.png');
  const [navigate, setNavigate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`https://final-project-fsw-3-kel-1.herokuapp.com/seller/product/`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    }, {
      name,
      description,
      price,
      categoryId: Number(categoryId),
      image
    })
      .then(() => {
        // setNewProduct(formData);
        message.success("Product successfully added!")
        // console.log("DATA NEW PRODUCT: ", newProduct);
        setNavigate(true);
      }).catch(err => {
        console.log(err);
      })

    console.log('IMAGE: ', image);
  }

  const handleFileUpload = (e) => {
    console.log('FILE: ', e.file.originFileObj);
    setImage(e.file.originFileObj);
  }

  console.log('CATEGORYID INPUT: ', categoryId);

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
              // multiple
              listType="picture"
              maxCount={1}
              // action={"http://localhost:3000/add-product"}
              // onChange={(e) => setImage(e.target.files[0])}
              showUploadList={{ showRemoveIcon: true }}
              accept=".png, .jpeg, .jpg"
              beforeUpload={(file) => {
                console.log({ file });
                return false;
              }}
              onChange={handleFileUpload}
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
              onChange={(value) => setCategoryId(value)}
            >
              <Option value="1">Clothes</Option>
              <Option value="2">Electronics</Option>
              <Option value="3">Spareparts</Option>
            </Select>
            <input type="text" name="name" className="lg:w-4/5 sm:w-4/5 lg:mx-12 sm:mx-8 my-4 px-2 py-2 border shadow-sm placeholder-grey focus:outline-none focus:border-light-grey focus:ring-purple block rounded-md sm:text-sm focus:ring-1" placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" name="price" className="lg:w-4/5 sm:w-4/5 lg:mx-12 sm:mx-8 my-4 px-2 py-2 border shadow-sm placeholder-grey focus:outline-none focus:border-light-grey focus:ring-purple block rounded-md sm:text-sm focus:ring-1" placeholder="450000" onChange={(e) => setPrice(Number(e.target.value))} />
            <textarea name="description" className="lg:w-4/5 sm:w-4/5 lg:h-[180px] sm:h-28 lg:mx-12 sm:mx-8 my-4 px-2 bg-white-normal border border-slate-600 shadow-sm placeholder-grey focus:outline-none focus:border-light-grey block rounded-md sm:text-sm focus:ring-1 resize-none focus:ring-gray-200" placeholder="Description of the product" onChange={(e) => setDescription(e.target.value)} ></textarea>
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

export default UpdateProduct