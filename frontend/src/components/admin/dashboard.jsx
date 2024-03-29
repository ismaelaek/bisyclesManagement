import React from 'react'
import AdminNavbar from './navbar';
import AdminSidebar from './sidebar';
import { useSelector } from 'react-redux'
import Statistics from './statistics';
import CustomersList from './customersList';
import Feedbacks from './feedback';
import "../../styles/dashboard.css"
import BikesList from './bikesList';
import AddBike from './addBike';

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
            return <BikesList/>;
        case 'addBike':
            return <AddBike />;
        case 'usersList':
            return <CustomersList/>;
        case 'feedback':
            return <Feedbacks />;
        default:
            break;
    }
}