import { Link } from 'react-router-dom';
import { Card } from 'antd';
import IconLocation from '../assets/ic_location.svg';

const CardProduct = ({ id, imgSrc, category, title, price, location }) => {
    return (
        <Link to={`/product-detail/${id}`}>
            <Card
                hoverable
                style={{
                    width: 240,
                    height: 460,
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "4px 0 12px 0 rgba(0, 0, 0, 0.1)",
                    margin: "48px"
                }}
                cover={<img className="h-60 object-cover" alt="example" src={imgSrc} />}
                className="flex flex-col text-left"
            >
                <span className="text-xs font-semibold inline-block py-1 px-2 mb-4  rounded text-dark-blue bg-light-blue  last:mr-0 mr-1">
                    {category}
                </span>
                <p className="text mb-1">{title}</p>
                <p className="text-dark-purple text-lg font-bold">Rp {price}</p>
                <div className="flex flex-row justify-end text-right items-center text-light-purple">
                    <img src={IconLocation} className="pr-1" />
                    <p className="m-0" >{location}</p>
                </div>
            </Card>
        </Link >
    )
};

export default CardProduct;