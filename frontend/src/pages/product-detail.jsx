import { Navbar, Footer, Buttons, ModalBuyer } from '../components';
import { Col, Row, Image } from 'antd';
import ImageProductDetail1 from '../assets/img_product_detail_1.png';
import ImageProductDetail2 from '../assets/img_product_detail_2.png';
import ImageProductDetail3 from '../assets/img_product_detail_3.png';
import ImageProductDetail4 from '../assets/img_product_detail_4.png';
import ImageProfile from '../assets/img_profile.png';

const productDetail = (imgSrc, type) => {
    return (
        <div>
            <Navbar />
            <br /><br /><br /><br />
            <Row className="flex flex-row flex-wrap justify-center">
                <Col flex="auto">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            width={450}
                            src={ImageProductDetail1}
                            className="my-8" />
                        <div className="flex flex-row">
                            <Image
                                width={100}
                                src={ImageProductDetail2}
                                className="px-2" />
                            <Image
                                width={100}
                                src={ImageProductDetail3}
                                className="px-2" />
                            <Image
                                width={100}
                                src={ImageProductDetail4}
                                className="px-2" />
                        </div>
                    </div>
                </Col>
                <Col flex="auto">
                    <div className="flex flex-col items-center">
                        <div className="container flex flex-col justify-start items-start bg-light-grey drop-shadow-md rounded-md w-96 my-8 p-8">
                            <p className="text-md">Nike Shoes</p>
                            <p className="text-xs text-grey">Sports &amp; Outdoor Activities</p>
                            <p className="text-black-normal text-lg font-bold">Rp. 950.000</p>
                            <p className="text-black-normal font-semibold">Description Product</p>
                            <p className="text-left w-11/12">Size 7/25 CM/Eur 40. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque morbi donec senectus egestas viverra ut. Sagittis porta tortor augue at morbi pulvinar. Pellentesque enim mauris dui molestie et at. Ullamcorper posuere arcu molestie erat tristique enim, eu morbi. </p>
                            {/* <button className={`${type = 'light-grey' ? 'bg-medium-purple text-light-grey' : 'bg-transparent text-dark-purple'} text-center items-center md:w-80 w-full sm:text-sm hover:text-dark-purple hover:bg-light-grey border border-dark-purple font-bold py-2 md:px-4 rounded flex justify-center mt-4`}>
                                <span>Buy</span>
                            </button> */}
                            <ModalBuyer />
                        </div>
                        
                        <div className="container flex flex-row justify-start items-start bg-light-grey drop-shadow-md rounded-md w-96 my-2 p-8">
                            <Image
                                width={40}
                                src={ImageProfile}
                                className="object-fill rounded-full"
                            />
                            <div className="flex flex-col items-start px-4">
                                <p className="font-bold">Nama Penjual</p>
                                <p className="text-grey m-0">Kota</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <br /><br /><br /><br />
            <Footer />
        </div>
    )
}

export default productDetail;