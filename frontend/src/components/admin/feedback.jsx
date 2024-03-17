import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SlDrawer } from "react-icons/sl";
import { fetchFeedbacks } from '@/storage/feedbackSlice';
import Loader from '../loader';
import NoData from './noData';


const Feedbacks = () => {
    const {feedbacks, isLoading, error} = useSelector(state=>state.feedbacks)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchFeedbacks());
    }, [dispatch])
    
    if (isLoading) {
        return <Loader />
    } else {
        return (
            <div className='h-full w-full'> 
                {feedbacks.length === 0 ? (<NoData Icon={SlDrawer} message={'no feedbacks yet.'} />
                    ) : (
                        <FeedsContent feeds={feedbacks} />
                )}
            </div>
        )
    }
};
export default Feedbacks;


const FeedsContent = ({ feeds }) => {
    const [extendedFeeds, setExtendedFeeds] = useState([]);
    const theme = useSelector(state => state.theme);
    const dark = theme === 'dark';

    const handleExtend = (id) => {
        setExtendedFeeds(prev => {
            if (prev.includes(id)) {
                return prev.filter(feedId => feedId !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    return (
        <div className={`feed-main p-4 ${dark ? 'text-gray-300 ' : ''}`}>
            <div>
                <h1 className='text-left text-3xl'> Feedbacks </h1>
            </div>
            <hr />
            <div className='mt-2 flex flex-col w-full items-start'>
                {feeds.map((item) => (
                    <div key={item.id} className={`relative feed-item w-full text-left mb-3 ${dark? 'feed-item-dark': ''} ${extendedFeeds.includes(item.id) ? 'h-fit' : 'h-14'}`}>
                        <h3 className='font-bold'> {item.customer_name} {!item.read && <span className='text-red-500'>*</span>}</h3>
                        <p>
                            {item.content}
                            {item.content.length > 100 && !extendedFeeds.includes(item.id) &&
                                <span className={`${dark ? 'bg-customDark' : 'bg-white'} text-green-500 cursor-pointer font-bold absolute top-7 right-2`} onClick={() => handleExtend(item.id)}>..Read more</span>
                            }
                            {extendedFeeds.includes(item.id) &&
                                <span className='text-green-500 cursor-pointer font-bold ml-2' onClick={() => handleExtend(item.id)}>Read less</span>
                            }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
