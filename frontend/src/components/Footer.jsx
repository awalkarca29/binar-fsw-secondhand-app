import { Col, Row } from 'antd';
import { InstagramFilled, FacebookFilled } from '@ant-design/icons';

const Footer = () => {
    return (
        <div>
            <Row className="flex flex-row p-8 bg-gradient-to-b from-dark-purple to-purple">
                <Col span={6} className="flex flex-col justify-start text-light-grey">
                    <p className="text-lg font-semibold">SecondHand</p>
                    <p className="text-left">Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonummy nibh euismod tincidunt ut</p>
                </Col>
                <Col span={6} className="flex flex-col text-light-grey">
                    <p className="text-lg font-semibold">Links</p>
                    <div className="flex flex-col">
                        <a className="text-light-grey font-semibold p-1">Home</a>
                        <a className="text-light-grey font-semibold p-1">About</a>
                        <a className="text-light-grey font-semibold p-1">Contact</a>
                    </div>
                </Col>
                <Col span={6} className="flex flex-col justify-center text-light-grey">
                    <p className="text-lg font-semibold">Follow Us</p>
                    <div className="flex flex-row justify-center">
                        <InstagramFilled className="text-xl p-1" />
                        <FacebookFilled className="text-xl p-1" />
                    </div>
                </Col>
                <Col span={6} className="flex flex-col text-light-grey">
                    <p className="text-lg font-semibold">NewsLetter</p>
                    <p>Let us know how we can help you</p>
                    <input type="text" class="rounded" placeholder="Email Address" />
                </Col>
            </Row>
        </div>
    )
};

export default Footer;