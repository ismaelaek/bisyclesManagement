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
    getItem('Other', 'other', null ,[
        getItem('FeedBacks', 'feedback', <MailOutlined />),
        getItem('More', 'more', <AppstoreOutlined />)
    ] ,'group'),
];
const AdminSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme)
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
        <div className='side-bar w-auto' >
            <div className={`logo w-full h-10 rounded-br-lg`} >
                <p className={theme === 'dark' ? 'text-white' : ''}>PedalPlex</p>
            </div>
                <Menu
                    className='text-left h-full pt-4 rounded-tr-lg'
                    defaultSelectedKeys={['dashboard']}
                    mode="inline"
                    theme={theme}
                    inlineCollapsed={collapsed}
                    items={items}
                    onSelect={handleMenuItemClick}
                />
        </div>
    );
};
export default AdminSidebar;