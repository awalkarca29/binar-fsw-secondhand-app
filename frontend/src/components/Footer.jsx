import { Col, Row } from 'antd';
import { Buttons } from '../components';
import IconInstagram from '../assets/ic_instagram.svg';
import IconWhatsapp from '../assets/ic_whatsapp.svg';
import IconFacebook from '../assets/ic_facebook.svg';
import LogoLight from '../assets/logo-light.svg';

const Footer = () => {
    return (
        <Row className="flex flex-row p-8 bg-gradient-to-b from-dark-purple to-purple">
            <Col span={6} className="flex flex-col justify-start text-light-grey">
                <img src={LogoLight} />
                <p className="text-left my-4">Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy nibh euismod tincidunt ut</p>
            </Col>
            <Col span={6} className="flex flex-col text-light-grey">
                <p className="text-lg font-semibold">Links</p>
                <div className="flex flex-col">
                    <a href="/" className="text-light-grey hover:text-light-blue font-semibold p-1">Home</a>
                    <a href="/about" className="text-light-grey hover:text-light-blue font-semibold p-1">About</a>
                    <a href="/contact-us" className="text-light-grey hover:text-light-blue font-semibold p-1">Contact</a>
                </div>
            </Col>
            <Col span={6} className="flex flex-col justify-center text-light-grey">
                <p className="text-lg font-semibold">Follow Us</p>
                <div className="flex flex-row justify-center">
                    <a href="https://instagram.com/academybinar" target="_blank">
                        <img src={IconInstagram} className="p-1" />
                    </a>
                    <a href="https://wa.link/e9ln64" target="_blank">
                        <img src={IconWhatsapp} className="p-1" />
                    </a>
                    <a href="https://instagram.com/academybinar" target="_blank">
                        <img src={IconFacebook} className="p-1" />
                    </a>
                </div>
            </Col>
            <Col span={6} className="flex flex-col justify-start">
                <p className="text-light-grey text-lg font-semibold">NewsLetter</p>
                <p className="text-light-grey text-left">Let us know how we can help you</p>
                <form className="bg-white flex flex-col justify-start">
                    <input className="border rounded w-full mb-3 text-sm" id="username" type="text" placeholder="Insert your email here" />
                    <button className="bg-transparent text-light-grey font-semibold py-2 px-4 border border-light-grey rounded hover:text-light-grey hover:bg-medium-purple">
                        Subscribe
                    </button>
                </form>
            </Col>
        </Row>
    )
};

export default Footer;