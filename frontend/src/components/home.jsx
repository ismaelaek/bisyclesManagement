import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikeData } from '../storage/bikesSlice';

export default function Home() {
    const dispatch = useDispatch();
    const { bikesData, isLoading, error } = useSelector(state => state.bikes);

    useEffect(() => {
        dispatch(fetchBikeData());
    }, [dispatch]);

    return (
        <div className='bg-bg w-full h-full items-center'>
            <h1 className='text-4xl'>Home page</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {bikesData.length !== 0 && (
                <ul>
                    {bikesData.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
