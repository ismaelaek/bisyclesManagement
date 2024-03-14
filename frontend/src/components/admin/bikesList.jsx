import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchBikeData } from '@/storage/bikesSlice';
import { Select } from 'antd';
import { Input } from 'antd';
import Loader from '../loader';
import NoData from './noData';


const BikesList = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBikes, setFilteredBikes] = useState([]);
    const { bikes, isLoading, error } = useSelector(state => state.bikes);
    const theme = useSelector(state => state.theme);
    let colorOpacity;
    if (theme === 'dark') {
        colorOpacity = '300';
    } else {
        colorOpacity = '500';
    }

    useEffect(() => {
        dispatch(fetchBikeData());
    }, [dispatch])
    useEffect(() => {
        if (bikes.length > 0) {
            const filtered = bikes.filter(item =>
                item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.material.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBikes(filtered);
        }
    }, [bikes, searchTerm]);
    
    if (isLoading) {
        return <Loader />
    } else {
        
        return (
            <div className='cust-list-main h-full w-full'> 
                {bikes.length === 0 ? (
                    <NoData message={'No bikes yet.'} />
                ) : (
                        <div className='m-5'>
                            <div className='customers-search-bar flex justify-between px-5'>
                                <Input
                                    className={`${theme === 'dark' ?
                                        'text-white bg-customBlue focus:bg-customBlue placeholder:text-gray-400 hover:bg-customBlue' :
                                        ''}`}
                                    style={{width: '30%'}}
                                    placeholder="Search for Type, Material..."
                                    value={searchTerm}
                                    onChange={e => { setSearchTerm(e.target.value); console.log(e.target.value)}}
                                />
                                <div>
                                    <Filter list={['M', 'L', 'XS']}/>
                                </div>
                            </div>
                            <div className='customers-list '>
                                <table
                                className={
                                    `mt-2 w-full
                                    ${theme === 'dark' ? ' text-gray-300' : ''}`
                                }
                            >
                                {filteredBikes.length === 0 ?
                                    <tr className=' w-full text-center' style={{border:'none'}}>
                                        <td>No matching results found.</td>
                                    </tr>
                                    : 
                                    <tr>
                                        <th>Image</th>
                                        <th>Type</th>
                                        <th>Size</th>
                                        <th>Material</th>
                                        <th>Status</th>
                                    </tr>
                                }
                                {filteredBikes.map((item) => {
                                    return <tr>
                                        <td>Image Here</td>
                                        <td>{item.type}</td>
                                        <td>{item.size}</td>
                                        <td>{item.material}</td>
                                        {item.availability ? <td className={`text-green-${colorOpacity}`}>
                                            Available
                                        </td> : <td className={`text-red-${colorOpacity}`}>
                                                Went Out
                                        </td> }
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
export default BikesList;


const Filter = ({ list }) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    return (
        <Select
            size='small'
            defaultValue="Size"
            style={{width: 60}}
            onChange={handleChange}
            options={[
                {
                value: list[0],
                label: list[0]
                },
                {
                value: list[1],
                label: list[1]
                },
                {
                value: list[2],
                label: list[2]
                }
            ]}
        />
    )
};