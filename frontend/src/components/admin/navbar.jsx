import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/storage/themeSlice';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Switch } from 'antd';
import { LuMoon, LuSun } from "react-icons/lu";



const AdminNavbar = () => {
    const dispatch = useDispatch()
    const theme= useSelector(state => state.theme)
    const handleMenuClick = (e) => {
        message.info(`Click on menu item. ${e.key}`);
    };
    const items = [
        {
            label: 'Log Out',
            key: '1',
            icon: <LogoutOutlined />,
        },
    ];
    const menuProps = {
    items,
    onClick: handleMenuClick,
    };
    const onChange = () => {
        dispatch(toggleTheme())
    }
    return (
        <nav
            className={`admin-nav h-10 ml-3 rounded-bl-lg rounded-br-lg text-2xl 
            ${theme === 'dark' ? 'dark-theme bg-customDark' : ''}}`}
        >
            <h1>Dashboard</h1>
            <div className=' flex justify-between gap-20'>
                <div className=' flex justify-between gap-1'>
                    <LuSun/>
                    <Switch checked={theme==='dark'} onChange={onChange} className=' bg-gray-300' />
                    <LuMoon/>
                </div>
                <Dropdown menu={menuProps}>
                    <Space className=' cursor-pointer text-lg'>
                        <p>John Doe</p>
                        <DownOutlined />
                    </Space>
                </Dropdown>
            </div>
        </nav>
    )
}

export default AdminNavbar;
