import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import { TweenMax } from 'gsap';
import { fetchCostumers } from '@/storage/customersSlice';
import { fetchBikeData } from '@/storage/bikesSlice';
import { MdOutlineDirectionsBike } from "react-icons/md";


const StatsItem = ({endpoint}) => {
    const dispatch = useDispatch();
    let fetchedData;
    endpoint === 'customers' ?
        fetchedData = useSelector(state => state.customers.customers) :
        fetchedData = useSelector(state => state.bikes.bikes);

    const dataNumberRef = useRef(null);
    useEffect(() => {
        endpoint === 'customers' ?
            dispatch(fetchCostumers()) :
            dispatch(fetchBikeData());
    }, [dispatch]);

    useEffect(() => {
        let numberOfData;
        endpoint === 'customers' ?
            numberOfData = fetchedData.filter(item => !item.is_admin).length :
            numberOfData = fetchedData.length;
        
        TweenMax.to(dataNumberRef.current, 0.5, {
            textContent: numberOfData,
            roundProps: { textContent: 1 },
            ease: 'power2.inOut',
        });
    }, [fetchedData]);
    return (
        <div className=' flex justify-between items-center p-5'>
            <div className=' bg-white text-4xl rounded-full w-20 h-20 flex justify-center items-center'>
                {endpoint === 'customers' ? <UserOutlined/> : <MdOutlineDirectionsBike/>}
            </div>
            <div>
                <h3>Number of {endpoint} </h3>
                <h3
                    ref={dataNumberRef}
                    className=' text-bold font-medium text-3xl'
                >
                    
                </h3>
            </div>
        </div>
    )
}

export default StatsItem;