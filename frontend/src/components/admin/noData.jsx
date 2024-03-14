import React from 'react';
import { useSelector } from 'react-redux';
import { SlDrawer } from "react-icons/sl";

const NoData = ({message }) => {
    const theme = useSelector(state => state.theme);
    return (
        <div
            className={`flex flex-col items-center justify-center h-full ${theme === 'dark' ? 'text-gray-300' : ''}`}
        >
            <SlDrawer className='text-8xl' />
            <h1>{message}</h1>
        </div>
    );
};

export default NoData;
