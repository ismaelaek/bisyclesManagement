import React from 'react'
import AdminNavbar from './navbar';
import AdminSidebar from './sidebar';
import { useSelector } from 'react-redux'
import Statistics from './statistics';
import "../../styles/dashboard.css"
import CustomersList from './customersList';

const Dashboard = () => {
    const theme = useSelector(state => state.theme);
    return (
        <main className={`dashboard-main ${theme === 'dark' ? 'darkTheme' : ''}`}>
            <AdminSidebar />
            <div>
                <AdminNavbar />
                <div className='dash-content p-4'>
                    <div className={`h-full flex w-full justify-center rounded-lg ${theme === 'dark' ? 'bg-customDark' : 'bg-white'}`} >
                        <DashContent/>
                    </div>
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
            return <Statistics />;
        case 'bikesList':
            return null;
        case 'usersList':
            return <CustomersList/>;
        default:
            break;
    }
}