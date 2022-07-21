import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavbarLogin, Footer } from '../components';
import { Select } from 'antd';
import { Upload, Button } from 'antd';
import ic_image from '../assets/ic_image.svg';
import Arrow_left from "../assets/ic_arrow_left.svg";
import { Link } from 'react-router-dom';

const { Option } = Select;

function AddProduct() {
  const [newProduct, setNewProduct] = useState([]);

  const [isUpdate, setIsUpdate] = useState({
    id: null,
    status: false
  });

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
    image: '',
    description: ''
  })

  useEffect(() => {
    // fetch data from API
    axios.get('https://final-project-fsw-3-kel-1.herokuapp.com/api/v1/product')
      .then((res) => {
        console.log(res.data);
        setNewProduct(res?.data ?? []);
      });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successful!");

    let data = [...newProduct];

    // check is data update
    if (isUpdate.status) {
      data.forEach((newProduct) => {
        if (newProduct.id === isUpdate.id) {
          newProduct.name = formData.name;
          newProduct.price = formData.price;
          newProduct.category = formData.category;
          newProduct.image = formData.image;
          newProduct.description = formData.description;
        }
      })
      axios.put(`https://final-project-fsw-3-kel-1.herokuapp.com/api/v1/seller/product/${isUpdate.id}`,
        {
          name: formData.name,
          price: formData.price,
          category: formData.category,
          description: formData.description
        })
        .then((res) => {
          alert("Successfully updated data!");
        })
    } else {
      let newData = {
        id: 2,
        name: formData.name,
        price: formData.price,
        category: formData.category,
        description: formData.description
      }
      data.push(newData);

      axios.post("https://final-project-fsw-3-kel-1.herokuapp.com/api/v1/seller/product", newData)
        .then((res) => {
          alert("Successfully saved data!");
        })
    }

    // add product's data
    setIsUpdate({ id: null, status: false });
    setNewProduct(data);
    setFormData({
      name: '',
      price: '',
      category: '',
      description: ''
    });
  }

  const handleChange = (e, value) => {
    console.log(`selected ${value}`);
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  };

  return (
    <div>
      <NavbarLogin />
      <Link to="/myproduct-seller">
        <img className='lg:mt-40 sm:mt-36 lg:mx-12 sm:mx-5 absolute cursor-pointer' src={Arrow_left} />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 md:gap-2 mx-10 ">
          <div className=" lg:my-48 sm:mt-40 sm:mb-10 lg:ml-20 lg:mx-60 sm:mx-16 rounded-lg shadow-lg bg-light-grey lg:h-72 sm:h-56 lg:w-full sm:w-80">
            <Upload.Dragger
              multiple
              listType="picture"
              action={"http://localhost:3000/add-product"}
              showUploadList={{ showRemoveIcon: true }}
              accept=".png, .jpeg, .jpg"
              beforeUpload={(file) => {
                console.log({ file });
                return false;
              }}
            >
              <img className='lg:mx-48 sm:mx-36 sm:w-10 my-4' src={ic_image} />
              <Button

              >Select Photos</Button>
              <h1 className='mt-2'>Or drag photos here</h1>
              <p className='text-grey text-sm'>Up max 4 photos</p>
            </Upload.Dragger>
          </div>
          <div className="lg:col-span-2 lg:my-40 lg:mx-32 sm:w-96 lg:w-auto sm:mx-8 rounded-lg shadow-lg bg-light-grey py-6 h-auto ">
            <Select
              defaultValue="Select a Category"
              style={{
                width: 490, border: 100
              }}
              onChange={handleChange}
            >
              <Option value="clothes">Clothes</Option>
              <Option value="shoe">shoe</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <input type="text" name="text" className="lg:w-[486px] sm:w-80 lg:mx-12 sm:mx-8 my-7 px-2 py-2 border shadow-sm placeholder-grey focus:outline-none focus:border-light-grey focus:ring-purple block rounded-md sm:text-sm focus:ring-1" placeholder="listing title" />
            <h1 className='font-bold lg:text-lg sm:text-base text-start lg:ml-14 sm:ml-8'>About the item</h1>
            <input type="text" name="text" className="lg:w-[486px] sm:w-80 lg:mx-12 sm:mx-8 my-7 px-2 py-2 border shadow-sm placeholder-grey focus:outline-none focus:border-light-grey focus:ring-purple block rounded-md sm:text-sm focus:ring-1" placeholder="Rp. Price" />
            <h1 className="font-semibold text-sm text-start lg:ml-14 sm:ml-8">Description</h1>
            <textarea className="lg:w-[480px] sm:w-72 lg:h-[180px] sm:h-28 mx-12 bg-white-normal border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 resize-none focus:ring-gray-200" placeholder=""></textarea>
            <div className='my-6 mx-14 flex justify-end'>
              <button className="bg-transparent text-dark-purple font-semibold lg:py-2 lg:px-4 sm:py-1 sm:px-2 border mx-3 border-dark-purple rounded-lg text-sm hover:text-light-grey hover:bg-medium-purple">
                Cancel
              </button>
              <button type="submit" className="bg-medium-purple text-light-grey font-semibold  lg:py-2 lg:px-4 sm:py-1 sm:px-2 text-sm rounded-lg hover:text-dark-purple hover:bg-light-grey border border-dark-purple">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default AddProduct