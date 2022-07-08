import { Col, Row } from 'antd';
import SideNavMenu from './SideNavMenu';
import IconEditProfile from '../assets/ic_edit_profile.svg';
import IconResetPassword from '../assets/ic_reset_password.svg';
import IconOrderHistory from '../assets/ic_order_history.svg';
import IconLogout from '../assets/ic_logout.svg';
import '../index.css';
import { useState, useEffect } from 'react';

const SideNav = (imgSrc) => {

    const [isActive, setIsActive] = useState(false);
    const [menuOption, setMenuOption] = useState('');

    // useEffect(() => {
    //     console.log("Is Active", isActive);
    // }, [isActive]);

    const handleMenuClick = (menu) => {
        setIsActive(true);
        menu = menu.toString();
        setMenuOption(menu);
        console.log("menu option: ", menuOption);
    }

    const styleActive = {
        backgroundColor: isActive ? 'var(--light-purple)' : '',
        color: isActive ? 'white' : ''
    }

    return (
        <Row className="flex flex-row my-24">
            <Col span="auto">
                <div className="container grid flex-col content-between side-nav bg-light-grey ml-12 p-2">
                    <div>
                        <Row>
                            <Col>
                                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="rounded-full object-cover h-160 w-160 p-6" />
                            </Col>
                        </Row>
                        <Row className="flex flex-col justify-center">
                            <Col className="flex flex-row justify-start items-center w-56 h-2 hover:bg-light-purple hover:text-light-grey px-4 py-6 rounded-lg cursor-pointer"
                                style={styleActive}
                                onSubmit={!isActive ? handleMenuClick : null}>
                                <img src={IconEditProfile}></img>
                                <p className="m-0 pl-2">Edit Profile</p>
                            </Col>
                        </Row>
                        <Row className="flex flex-col justify-center">
                            <Col className="btn-sidenav flex flex-row justify-start items-center w-56 h-2 px-4 py-6 rounded-lg cursor-pointer"
                                style={styleActive}
                                onSubmit={!isActive ? handleMenuClick : null}>
                                <img src={IconResetPassword} className="icon"></img>
                                <p className="m-0 pl-2">Reset Password</p>
                            </Col>
                        </Row>
                        <Row className="flex flex-col justify-center">
                            <Col className="btn-sidenav flex flex-row justify-start items-center w-56 h-2 px-4 py-6 rounded-lg cursor-pointer"
                                style={styleActive}
                                onSubmit={!isActive ? handleMenuClick : null}>
                                <img src={IconOrderHistory} className="icon"></img>
                                <p className="m-0 pl-2">Order History</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="flex flex-row justify-center items-center w-auto h-auto bg-danger text-light-grey font-semibold mx-4 my-4 py-2 px-4 rounded cursor-pointer">
                        <img src={IconLogout}></img>
                        <p className="ml-2 mb-0">Log Out</p>
                    </div>
                </div>
            </Col>
            <Col span={12} className="mx-12">
                <SideNavMenu
                    menu={menuOption}
                />
            </Col>
        </Row>
    );
};

export default SideNav;