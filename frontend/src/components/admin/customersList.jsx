import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCostumers } from '@/storage/customersSlice';
import { Input } from 'antd';
import Loader from '../loader';
import NoData from './noData';


const CustomersList = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const { customers, isLoading, error } = useSelector(state => state.customers);
    const nonAdminCustomers = customers.filter(item => !item.is_admin);
    const theme = useSelector(state => state.theme);

    useEffect(() => {
        dispatch(fetchCostumers());
    }, [dispatch])
    useEffect(() => {
        if (nonAdminCustomers.length > 0) {
            const filtered = nonAdminCustomers.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.phone_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.address.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCustomers(filtered);
        }
    }, [nonAdminCustomers, searchTerm]);
    if (isLoading) {
        return <Loader />
    } else {
        
        return (
            <div className='cust-list-main h-full w-full'> 
                {customers.length === 0 ? (
                    <NoData message={'No regestered customers yet.'} />
                ) : (
                        <div className='m-5'>
                            <div className='customers-search-bar flex justify-start px-5'>
                                <Input
                                    className={`${theme === 'dark' ?
                                        'text-white bg-customBlue focus:bg-customBlue placeholder:text-gray-400 hover:bg-customBlue' :
                                        ''}`}
                                    placeholder="Search for customer..."
                                    value={searchTerm}
                                    onChange={e => { setSearchTerm(e.target.value); console.log(e.target.value)}}
                                />
                            </div>
                            <div className='customers-list '>
                                <table
                                className={
                                    `mt-2 w-full
                                    ${theme === 'dark' ? ' text-gray-300' : ''}`
                                }
                            >
                                {filteredCustomers.length === 0 ?
                                    <tr className=' w-full text-center' style={{border:'none'}}>
                                        <td>No matching results found.</td>
                                    </tr>
                                    : 
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Adress</th>
                                        <th>Joined At</th>
                                    </tr>
                                }
                                {filteredCustomers.map((item) => {
                                    return <tr>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone_number}</td>
                                        <td>{item.address}</td>
                                        <td>{item.created_at ? item.created_at.substring(0, 10) : "-" }</td>
                                    </tr>
                                })}
                            </table>
                            </div>
                    </div>
                )}
            </div>
        )
    }
};
export default CustomersList;
