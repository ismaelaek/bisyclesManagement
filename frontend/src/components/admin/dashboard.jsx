import React from 'react'
import AdminNavbar from './navbar';
import AdminSidebar from './sidebar';
import { useSelector } from 'react-redux'
import "../../styles/dashboard.css"

const Dashboard = () => {
    return (
        <main className='dashboard-main'>
            <AdminSidebar />
            <div>
                <AdminNavbar />
                <DashContent/>
            </div>
        </main>
    )
}

export default Dashboard;

const DashContent = () => {
    const content = useSelector(state => state.dashboard);
    return (
        <h1>{ content }</h1>
    )
}