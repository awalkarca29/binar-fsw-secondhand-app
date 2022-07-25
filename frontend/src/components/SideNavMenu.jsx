import PasswordSeen from '../assets/ic_password_seen.svg';
import ListBuyerHistory from './ListBuyerHistory';
import React, { useState, useEffect, useRef } from 'react';
import { Form, Upload, Button, message, Spin } from "antd";
import axios from 'axios';
import InputForm from './InputForm';
import ButtonCustom from './ButtonCustom';
import ic_image from '../assets/ic_image.svg';

const SideNavMenu = ({ menu }) => {
    const [history, setHistory] = useState([]);
    const [user, setUser] = useState({
        name: '',
        address: '',
        city: '',
        phone: '',
        image: ''
    });

    const getUser = async () => {
        await axios({
            url: `https://final-project-fsw-3-kel-1.herokuapp.com/auth/profile`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setUser(res.data.data);
            }).catch(err => {
                console.log(err);
            })
    };

    const ref = useRef(getUser)
    useEffect(() => { ref.current() }, []);

    useEffect(() => {
        const getHistory = async () => {
            await axios({
                url: `https://final-project-fsw-3-kel-1.herokuapp.com/history/`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    setHistory(res.data.data);
                }).catch(err => {
                    console.log(err);
                })
        };
        getHistory();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();

        await axios({
            url: `https://final-project-fsw-3-kel-1.herokuapp.com/profile/update`,
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: user
        })
            .then(() => {
                message.success('Edit profile was successful!')
            }).catch(err => {
                message.error('Edit profile failed!')
                console.log(err);
            })
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    switch (menu) {
        case "reset":
            return (
                <div>
                    <h1 className="font-bold text-xl text-left text-dark-purple mb-6">Reset Password</h1>
                    <Form
                        name="basic"
                        wrapperCol={{
                            span: 12,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div className="flex flex-col justify-start text-left mb-4">
                            <label className="text-medium-purple px-2 mb-2">Old Password</label>
                            <div className="relative flex w-full flex-wrap items-stretch mb-4">
                                <input type="password" name="old-password" className="md:w-full md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200" placeholder="Input your old password" />
                                <img className="pointer-events-none w-8 h-8 p-0 absolute top-1/2 transform -translate-y-1/2 right-3" src={PasswordSeen} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start text-left mb-4">
                            <label className="text-medium-purple px-2 mb-2">New Password</label>
                            <div className="relative flex w-full flex-wrap items-stretch mb-4">
                                <input type="password" name="new-password" className="md:w-full md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200" placeholder="Input your new password" />
                                <img className="pointer-events-none w-8 h-8 p-0 absolute top-1/2 transform -translate-y-1/2 right-3" src={PasswordSeen} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start text-left mb-4">
                            <label className="text-medium-purple px-2 mb-2">Confirm Password</label>
                            <div className="relative flex w-full flex-wrap items-stretch mb-4">
                                <input type="password" name="old-password" className="md:w-full md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200" placeholder="Confirm your new password" />
                                <img className="pointer-events-none w-8 h-8 p-0 absolute top-1/2 transform -translate-y-1/2 right-3" src={PasswordSeen} />
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center h-auto bg-medium-purple text-light-grey font-semibold my-4 py-2 px-4 rounded cursor-pointer">
                            <p className="ml-2 mb-0">Save</p>
                        </div>
                    </Form>
                </div>
            )
        case "history":
            return (
                <div>
                    <h1 className="font-bold text-xl text-left text-dark-purple mb-6">Order History</h1>
                    <div className="filter flex flex-row justify-start">
                        <div className="text-xs w-auto font-semibold inline-block py-1 px-2 rounded text-light-grey bg-dark-blue last:mr-0 mr-3 cursor-pointer">
                            All
                        </div>
                        <div className="text-xs font-semibold inline-block py-1 px-2  rounded text-dark-blue bg-light-blue last:mr-0 mr-3 cursor-pointer">
                            In Progress
                        </div>
                        <div className="text-xs font-semibold inline-block py-1 px-2  rounded text-dark-blue bg-light-blue last:mr-0 mr-3 cursor-pointer">
                            Completed
                        </div>
                        <div className="text-xs font-semibold inline-block py-1 px-2  rounded text-dark-blue bg-light-blue last:mr-0 mr-3 cursor-pointer">
                            Rejected
                        </div>
                    </div>
                    {history.map((products) => (
                        <ListBuyerHistory
                            id={products.id}
                            imgSrc={products.image}
                            category={products.Category.name}
                            title={products.title}
                            price={products.price}
                            description={products.description}
                        />
                    ))
                    }
                </div>
            )
        default:
            return (
                <div>
                    <h1 className="font-bold text-xl text-left text-dark-purple mb-8">Edit Profile</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-12 rounded-lg shadow-lg bg-light-grey lg:h-64 sm:h-56 lg:w-full sm:w-80">
                            <Upload.Dragger
                                listType="picture"
                                maxCount={1}
                                showUploadList={{ showRemoveIcon: true }}
                                accept=".png, .jpeg, .jpg"
                                beforeUpload={(file) => {
                                    setUser({
                                        ...user, image: file
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
                                <Button>Select Profile Photo</Button>
                                <h1 className='mt-2'>Or drag photos here</h1>
                                <p className='text-grey text-sm'>This photo will be shown as your profile picture</p>
                            </Upload.Dragger>
                        </div>
                        <div className="flex flex-col justify-start text-left mb-2 sm:mt-24">
                            <label className="text-medium-purple px-2">Full Name</label>
                            <InputForm
                                type="userdata"
                                inputType="text"
                                name="name"
                                placeholder="John Doe"
                                value={user.name}
                                action={(e) => {
                                    setUser({ ...user, name: e.target.value })
                                }}
                            />
                        </div>
                        <div className="flex flex-col justify-start text-left mb-2">
                            <label className="text-medium-purple px-2">Email</label>
                            <InputForm
                                type="userdata"
                                inputType="email"
                                name="email"
                                placeholder="john.doe@mail.com"
                                value={user.email}
                                disabled="true"
                            />
                        </div>
                        <div className="flex flex-col justify-start text-left mb-2">
                            <label className="px-2">Phone Number</label>
                            <InputForm
                                type="userdata"
                                inputType="text"
                                name="phone"
                                placeholder="08212463792"
                                value={user.phone}
                                action={(e) => {
                                    setUser({ ...user, phone: e.target.value })
                                }}
                            />
                        </div>
                        <div className="flex flex-col justify-start text-left mb-2">
                            <label className="text-medium-purple px-2">City</label>
                            <InputForm
                                type="userdata"
                                inputType="text"
                                name="city"
                                placeholder="South Jakarta"
                                value={user.city}
                                action={(e) => {
                                    setUser({ ...user, city: e.target.value })

                                }}
                            />
                        </div>
                        <div className="flex flex-col justify-start text-left mb-2">
                            <label className="px-2">Address</label>
                            <InputForm
                                type="textarea-auto"
                                name="address"
                                placeholder="The Breeze BSD Bumi Serpong, Banten, Indonesia"
                                value={user.address}
                                action={(e) => {
                                    setUser({ ...user, address: e.target.value })
                                }}
                            />
                        </div>
                        <ButtonCustom
                            type="primary-auto"
                            text="Save"
                        />
                    </form>
                </div>
            )

    }

}

export default SideNavMenu;