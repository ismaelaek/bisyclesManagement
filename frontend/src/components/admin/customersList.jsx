import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCostumers } from '@/storage/customersSlice';
import Loader from '../loader';


const CustomersList = () => {
    const dispatch = useDispatch();
    const { customers, isLoading, error } = useSelector(state => state.customers);
    const nonAdminCustomers = customers.filter(item => !item.is_admin);
    console.log(nonAdminCustomers)
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchCostumers());
    }, [dispatch])
    return (
        <div>
            {isLoading && <Loader />}
            {!isLoading && error ?
                <p>{error}</p> :
                <>
                    
                </>
            }
        </div>
    )
};
export default CustomersList;