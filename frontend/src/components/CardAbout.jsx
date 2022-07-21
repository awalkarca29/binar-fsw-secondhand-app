import { Card } from 'antd';

const CardImage = ({ imgSrc, title }) => (
    <Card
        style={{
            width: 240,
            height: 320,
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "2px 0 4px 0 rgba(0, 0, 0, 0.1)",
            margin: "48px"
        }}
        cover={<img className="h-60 p-4 object-fit" alt="example" src={imgSrc} />}
        className="flex flex-col text-left"
    >
        <p className="text-lg font-semibold text-light-purple text-center mb-1">{title}</p>
    </Card>
);

export default CardImage;