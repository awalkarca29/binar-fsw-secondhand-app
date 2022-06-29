import { Carousel } from 'antd';

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
                src="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
        </div>
        <div>
            <img
                style={contentStyle}
                src="https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            />
        </div>
        <div>
            <img
                style={contentStyle}
                src="https://images.unsplash.com/photo-1500926165259-30ef3079d477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
        </div>
    </Carousel>
);

export default CarouselHeadline;