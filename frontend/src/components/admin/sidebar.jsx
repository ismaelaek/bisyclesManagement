import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '@/storage/dashboardSlice';
import { MdOutlineDirectionsBike } from "react-icons/md";
import {
    AppstoreOutlined,
    UserOutlined,
    MailOutlined,
    PieChartOutlined,
    PlusCircleOutlined,
    UserDeleteOutlined 
} from '@ant-design/icons';
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
    getItem('Dashboard', 'dashboard', <PieChartOutlined />),
    getItem('Bikes', 'bikes', null ,[
        getItem('All Bikes', 'bikesList', <MdOutlineDirectionsBike />),
        getItem('Add Bike', 'addBike',<PlusCircleOutlined /> ),
    ], 'group'),
    
    getItem('Users', 'users', null ,[
        getItem('All User', 'usersList', <UserOutlined />),
        getItem('Delete User', 'deleteUser',<UserDeleteOutlined /> ),
    ] ,'group'),
    getItem('Other', 'users', null ,[
        getItem('FeedBacks', 'feedback', <MailOutlined />),
        getItem('Navigation Two', 'sub2', <AppstoreOutlined />)
    ] ,'group'),
];
const AdminSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const handleMenuItemClick = (e) => {
        console.log('onSelect :', e.key);
        dispatch(setActivePage(e.key));
    };
    useEffect(() => {
        const handleResize = () => {
            setCollapsed(window.innerWidth <= 720);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className=' w-50' >
            <div className='logo w-full h-10'>
                    <h1>Logo</h1>
            </div>
                <Menu
                    className='text-left'
                    defaultSelectedKeys={['dashboard']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={collapsed}
                    items={items}
                    onSelect={handleMenuItemClick}
                />
        </div>
    );
};
export default AdminSidebar;