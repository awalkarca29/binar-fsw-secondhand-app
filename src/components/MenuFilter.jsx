import { SkinOutlined, LaptopOutlined, CarOutlined, HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Clothes', 'sub1', <SkinOutlined />),
    getItem('Electronics', 'sub2', <LaptopOutlined />),
    getItem('Spareparts', 'sub3', <CarOutlined />),
    getItem('Furniture', 'sub4', <HomeOutlined />),
    getItem('Others', 'sub5', <AppstoreOutlined />),
];

const MenuFilter = (category) => {
    const onClick = (e) => {
        category = e.type;
    };

    return (
        <div>
            <h3 className="text-lg text-left text-medium-purple font-semibold my-8 mx-8">Filter</h3>
            <Menu
                onClick={onClick}
                style={{
                    borderRadius: "12px",
                    width: 256,
                    boxShadow: "2px 0 4px 0 rgba(0, 0, 0, 0.1)"
                }}
                mode="inline"
                items={items}
            />
        </div>

    );
};

export default MenuFilter;