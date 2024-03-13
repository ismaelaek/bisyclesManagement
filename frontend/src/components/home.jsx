import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCostumers } from '@/storage/customersSlice';
import { fetchBikeData } from '../storage/bikesSlice';

export default function Home() {
    const dispatch = useDispatch();
    const { customers, isLoading, error } = useSelector(state => state.customers);

    useEffect(() => {
        dispatch(fetchCostumers());
    }, [dispatch]);

    return (
        <div className='bg-bg w-full h-full items-center'>
            <h1 className='text-4xl'>Home page</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {customers.length !== 0 && (
                <ul>
                    {customers.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
