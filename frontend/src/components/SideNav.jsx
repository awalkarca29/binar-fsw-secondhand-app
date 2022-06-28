import { Divider, Menu } from 'antd';
import { SettingFilled, CalendarOutlined } from '@ant-design/icons';
import IconResetPassword from '../assets/ic_reset_password.svg';
import IconOrderHistory from '../assets/ic_order_history.svg';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Edit Profile', '1', <SettingFilled />),
    getItem('Reset Password', '2', <CalendarOutlined />),
    getItem('Order History', '3', <CalendarOutlined />),
];

const SideNav = (imgSrc) => {
    return (
        <div className="container flex flex-col justify-start items-center">
            <br />
            <br />
            <img src={imgSrc} className="rounded-full object-cover h-24 w-24" />
            <Menu
                style={{
                    width: 280,
                    height: 540,
                    boxShadow: '4px 0 12px 0 rgba(0, 0, 0, 0.12)',
                    borderRadius: '12px',
                    backgroundColor: '#F9F9F9'
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                items={items}
            >
            </Menu>
        </div>
    );
};

export default SideNav;