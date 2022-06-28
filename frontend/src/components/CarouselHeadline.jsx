import { Carousel } from 'antd';
const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '250px',
    textAlign: 'center',
    background: '#364d79',
};

const CarouselHeadline = ({src}) => (
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>
                <img src={src}/>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img src={src}/>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img src={src}/>
            </h3>
        </div>
    </Carousel>
);

export default CarouselHeadline;