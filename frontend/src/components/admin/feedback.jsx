import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SlDrawer } from "react-icons/sl";
import Loader from '../loader';
import NoData from './noData';


const Feedbacks = () => {
    const dispatch = useDispatch();
    const test = [];

    // useEffect(() => {
    //     dispatch(fetchCostumers());
    // }, [dispatch])
    
    // if (isLoading) {
    //     return <Loader />
    // } else {
        
        return (
            <div className='h-full w-full'> 
                {test.length === 0 && <NoData Icon={SlDrawer} message={'no feedbacks yet.'}/>}
            </div>
        )
    // }
};
export default Feedbacks;