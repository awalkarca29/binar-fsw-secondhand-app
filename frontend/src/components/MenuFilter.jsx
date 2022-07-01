import { ManOutlined, WomanOutlined } from '@ant-design/icons';
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
    getItem('Women\'s Fashion', 'sub1', <WomanOutlined />, [
        getItem('Clothes', '1'),
        getItem('Shoes', '2'),
        getItem('Bag', '3'),
    ]),
    getItem('Men\'s Fashion', 'sub2', <ManOutlined />, [
        getItem('Clothes', '4'),
        getItem('Shoes', '5'),
        getItem('Bag', '6'),
    ]),
];

const MenuFilter = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <div>
            <h3 className="text-lg text-left text-medium-purple font-semibold my-8 mx-8">Filter</h3>
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                mode="inline"
                items={items}
            />
        </div>

    );
};

export default MenuFilter;