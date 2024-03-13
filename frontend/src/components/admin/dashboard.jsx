import React from 'react'
import AdminNavbar from './navbar';
import AdminSidebar from './sidebar';
import { useSelector } from 'react-redux'
import Statistics from './statistics';
import "../../styles/dashboard.css"

const Dashboard = () => {
    const theme = useSelector(state => state.theme);
    return (
        <main className={`dashboard-main ${theme === 'dark' ? 'darkTheme' : ''}`}>
            <AdminSidebar />
            <div>
                <AdminNavbar />
                <div className=' p-4'>
                    <DashContent/>
                </div>
            </div>
        </main>
    )
}

export default Dashboard;

const DashContent = () => {
    const content = useSelector(state => state.dashboard);
    const theme = useSelector(state => state.theme);
    switch (content) {
        case 'dashboard':
            return <div className={`flex w-full h-80 justify-center items-center  rounded-lg ${theme === 'dark' ? 'bg-customDark' : 'bg-white'}`} >
                <Statistics/>
            </div>;
        default:
            break;
    }
}