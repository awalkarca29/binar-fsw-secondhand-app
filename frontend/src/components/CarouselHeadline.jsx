import { Carousel } from 'antd';
import CarouselImage1 from '../assets/img_carousel_1.png';
import CarouselImage2 from '../assets/img_carousel_2.png';
import CarouselImage3 from '../assets/img_carousel_3.png';

const contentStyle = {
    height: '500px',
    width: '100%',
    objectFit: 'cover',
    color: '#fff',
    lineHeight: '250px',
    textAlign: 'center',
    background: '#364d79',
};

const CarouselHeadline = ({ src }) => (
    <Carousel autoplay>
        <div>
            <img
                style={contentStyle}
                src={CarouselImage1}
            />
        </div>
        <div>
            <img
                style={contentStyle}
                src={CarouselImage2}
            />
        </div>
        <div>
            <img
                style={contentStyle}
                src={CarouselImage3}
            />
        </div>
    </Carousel>
);

export default CarouselHeadline;