import { Row, Col } from "antd";
import ImageShoes from "../assets/sepatu_1.png";
import IconDelete from "../assets/ic_delete.svg";
import IconEdit from "../assets/ic_edit.svg";
import { Link } from "react-router-dom"

const ListSellerProduct = ({ productName, openPrice, image }) => {
    return (
        <div className="flex flex-row items-center justify-between text-left bg-light-grey rounded-xl p-4 m-4 border border-grey">
            <div className="flex flex-row items-center">
                <Col span="auto" className="mr-6">
                    <img className='rounded-md my-5 ml-5 w-20 h-20 object-none' src={ImageShoes} />
                </Col>
                <Col span="auto" className="mr-6">
                    <p className="font-semibold text- my-2">{productName}</p>
                    <h4 className="text-lg">{openPrice}</h4>
                </Col>
            </div>
            <Col className="btn-group flex flex-row justify-center">
                <button className="bg-danger text-light-grey hover:text-white mr-4 py-2 px-4 rounded">
                    <img src={IconDelete} />
                </button>
                <button className="bg-light-purple text-light-grey hover:text-white mr-4 py-2 px-4 rounded">
                    <img src={IconEdit} />
                </button>
                <Link to="/offer-information">
                    <button className="bg-medium-purple text-light-grey hover:text-white mr-4 py-2 px-4 rounded">
                        Bid Info
                    </button>
                </Link>
            </Col>
        </div>
    )
}
export default ListSellerProduct;