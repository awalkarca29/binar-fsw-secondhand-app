import { Col, Row } from 'antd';
import SideNavMenu from './SideNavMenu';
import IconEditProfile from '../assets/ic_edit_profile.svg';
import IconResetPassword from '../assets/ic_reset_password.svg';
import IconOrderHistory from '../assets/ic_order_history.svg';
import IconLogout from '../assets/ic_logout.svg';
import { Navigate, useNavigate } from 'react-router-dom';
import '../index.css';
import { useState } from 'react';
import SkeletonImage from 'antd/lib/skeleton/Image';

const SideNav = (imgSrc) => {

    const [menuOption, setMenuOption] = useState('edit');
    const [image, setImage] = useState('');

    const handleMenuClick = (option) => {
        setMenuOption(option);
    }

    const styleActive = {
        backgroundColor: 'var(--light-purple)',
        color: 'white'
    }

    const [navigate, setNavigate] = useState(false); 

    function logOut() {
        localStorage.removeItem('token');
        setNavigate(true)
    }
    
    if (navigate) {
        return <Navigate to="/"/>
      }

    const handleChange = (e) => {
       console.log(e.target.files)
       setImage(e.target.files[0])
    }
    return (
        <Row className="flex flex-row my-32 xl:justify-start sm:justify-center">
            <Col span="auto">
                <div className="container grid flex-col content-between side-nav bg-light-grey ml-12 mb-12 p-2">
                    <div>
                        <Row>
                            <Col>
                                {/* <img src={currentUser?.photoURL} className="rounded-full object-cover h-160 w-160 p-6" /> */}
                                
                            </Col>
                        </Row>
                        <Row className="flex flex-col justify-center">
                            <Col className="flex flex-row justify-start items-center w-56 h-2 hover:bg-light-purple hover:text-light-grey px-4 py-6 rounded-lg cursor-pointer"
                                style={menuOption === 'edit' && styleActive}
                                onClick={() => handleMenuClick('edit')}>
                                <img src={IconEditProfile}></img>
                                <p className="m-0 pl-2">Edit Profile</p>
                            </Col>
                        </Row>
                        <Row className="flex flex-col justify-center">
                            <Col className="btn-sidenav flex flex-row justify-start items-center w-56 h-2 px-4 py-6 rounded-lg cursor-pointer"
                                style={menuOption === 'reset' && styleActive}
                                onClick={() => handleMenuClick('reset')}>
                                <img src={IconResetPassword} className="icon"></img>
                                <p className="m-0 pl-2">Reset Password</p>
                            </Col>
                        </Row>
                        <Row className="flex flex-col justify-center">
                            <Col className="btn-sidenav flex flex-row justify-start items-center w-56 h-2 px-4 py-6 rounded-lg cursor-pointer"
                                style={menuOption === 'history' && styleActive}
                                onClick={() => handleMenuClick('history')}>
                                <img src={IconOrderHistory} className="icon"></img>
                                <p className="m-0 pl-2">Order History</p>
                            </Col>
                        </Row>
                    </div>
                    <div onClick={logOut} className="flex flex-row justify-center items-center w-auto h-auto bg-danger text-light-grey font-semibold mx-4 my-4 py-2 px-4 rounded cursor-pointer">
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