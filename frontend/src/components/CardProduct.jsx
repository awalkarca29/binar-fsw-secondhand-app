import { Card } from 'antd';
import IconLocation from '../assets/ic_location.svg';

const CardProduct = ({ title, price, location }) => (
    <Card
        hoverable
        style={{
            width: 240,
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "4px 0 12px 0 rgba(0, 0, 0, 0.1)",
            margin: "48px"
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        className="flex flex-col text-left"
    >
        <p className="text">{title}</p>
        <p className="text-dark-purple">Start from <span className="text-lg font-bold">{price}</span></p>
        <div className="flex flex-row justify-end text-right items-center">
            <img src={IconLocation} className="pr-2" />
            <p className="m-0" >{location}</p>
        </div>
    </Card>
);

export default CardProduct;