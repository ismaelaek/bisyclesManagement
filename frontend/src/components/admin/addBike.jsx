import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "@/components/ui/button"
import { storeBike } from '@/storage/bikesSlice';
import { Select, Input, message } from 'antd';

export default function AddBike() {
  const { resMessage, isLoading } = useSelector(state => state.bikes);
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const [formData, setFormData] = useState({
    type: '',
    size: '',
    material: '',
    price_per_hour: 0.0
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleSizeChange = (value) => {
    setFormData({ ...formData, size: value });
    console.log(formData);
  };

  const handleMaterialChange = (value) => {
    setFormData({ ...formData, material: value });
    console.log(formData);
  };


  const submitHandler =  (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('image', image);
    data.append('type', formData.type);
    data.append('material', formData.material);
    data.append('size', formData.size);
    data.append('proce_per_hour', formData.price_per_hour);
    data.append('_method', 'post');
    if (!image || !formData.type || !formData.size || !formData.material || isNaN(parseFloat(formData.price_per_hour)))
      return message.error("Please fill all fields!");

    dispatch(storeBike(data))
    message.info(resMessage);
}

    return (
      <div className={`${theme==='dark' ? 'dark-form' : ''} flex justify-start w-full p-4`}>
        <form className=" flex flex-col items-start w-full gap-5" onSubmit={submitHandler} encType='multipart/form-data'>
            <label className="font-semibold" htmlFor="type">
              Type
            </label>
            <Input className=" w-80" name="type" placeholder="Type" required type="text" onChange={onChange} />
            <label className="font-semibold" htmlFor="image">
              Image
            </label>
            <Input className=" w-80" name="image" type="file" onChange={(e)=> setImage(e.target.files[0])} />
          <div className="flex gap-5 mt-4">
            <label className="font-semibold" htmlFor="size">
              Size
            </label>
          <Select
            className='size w-20'
            placeholder="Select size"
            optionFilterProp="children"
            onChange={handleSizeChange}
            options={[
                { value: 'S', label: 'S' },
                { value: 'M', label: 'M' },
                { value: 'L', label: 'L' },
                { value: 'XL', label: 'XL' },
            ]}
          />
          <label className="font-semibold" htmlFor="material">
            Material
          </label>
          <Select
            className='material w-40'
            defaultValue={'Aluminum'}
            placeholder="Select material"
            optionFilterProp="children"
            onChange={handleMaterialChange}
            options={[
                { value: 'Aluminum', label: 'Aluminum' },
                { value: 'Steel', label: 'Steel' },
                { value: 'Carbon', label: 'Carbon' },
            ]}
            />
            <label className="font-semibold" htmlFor="price_per_hour">
              Price
            </label>
            <Input
              type="text"
              onChange={(e)=>setFormData({...formData, [e.target.name]:  parseFloat(e.target.value)}) }
              className="input-field w-20"
              name="price_per_hour"
              placeholder="Price per Hour"
              />
          </div>
          <Button className=" bg-customBlue"  type="submit">
            {isLoading? 'Please wait...': 'Submit'}
          </Button>
        </form>
      </div>
    )
}
