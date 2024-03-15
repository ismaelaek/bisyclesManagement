import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchBikeData } from '@/storage/bikesSlice';
import { Select, Modal } from 'antd';
import { Input } from 'antd';
import Loader from '../loader';
import NoData from './noData';


const BikesList = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBikes, setFilteredBikes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalVisible(true);
    };
    const { bikes, isLoading, error } = useSelector(state => state.bikes);
    const theme = useSelector(state => state.theme);
    let green, red ;
    if (theme === 'dark') {
        green = 'text-green-300';
        red = 'text-red-300';
    } else {
        green = 'text-green-600';
        red = 'text-red-600';
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
                                    return <tr key={item.id}>
                                        <td className=' p-0  h-24 w-16 '>
                                            <div className=' h-full flex items-center overflow-hidden rounded-xl '>
                                                <img 
                                                    className=' h-full cursor-pointer' 
                                                    src={`http://localhost:8000/storage/images/bikes/${item.image}`} 
                                                    alt="" 
                                                    onClick={() => handleImageClick(`http://localhost:8000/storage/images/bikes/${item.image}`)}
                                                />
                                            </div>
                                        </td>
                                        <td>{item.type}</td>
                                        <td>{item.size}</td>
                                        <td>{item.material}</td>
                                        {item.availability ? <td className={green}>
                                            Available
                                        </td> : <td className={red}>
                                                Went Out
                                        </td> }
                                    </tr>
                                })}
                                </table>
                                <Modal
                                    visible={modalVisible}
                                    onCancel={() => setModalVisible(false)}
                                    footer={null}
                                    className=''
                                    
                                >
                                    <img 
                                        src={selectedImage} 
                                        className=' rounded-lg'
                                        alt="Large" 
                                        style={{width: '100%', maxHeight: '70vh', objectFit: 'contain'}}
                                    />
                                </Modal>
                            </div>
                    </div>
                )}
            </div>
        )
    }
};
export default BikesList;

