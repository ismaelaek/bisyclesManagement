import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBikes } from "../storage/bikesSlice";
import { addRental } from "../storage/rentalsSlice";
import { Form, DatePicker, Button } from "antd";
import BikeCard from "./bikeCard";

const Reservation = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const user = JSON.parse(localStorage.getItem("user"));
	const { bikes } = useSelector((state) => state.bikes);
	const bike = bikes.find((bike) => bike.id == id);
	const [form] = Form.useForm();
	const [totalPrice, setTotalPrice] = useState(0);
	const [dates, setDates] = useState({
		start: null,
		end: null,
	});

	useEffect(() => {
		dispatch(getBikes());
	}, [dispatch]);

	const handleStartDate = (date) => {
		setDates({ ...dates, start: date });
	};

	const handleEndDate = (date) => {
		setDates({ ...dates, end: date });

		const hoursDiff = Math.abs(date.diff(dates.start, "hours"));
		const totalPrice = hoursDiff * parseFloat(bike.price_per_hour);
		setTotalPrice(totalPrice);
	};

	const onFinish = () => {
		const rentalData = {
			user_id: user.id,
			bike_id: bike.id,
			start_date: dates.start.format("YYYY-MM-DD"),
			end_date: dates.end.format("YYYY-MM-DD"),
			total_price: totalPrice,
		};
		dispatch(addRental(rentalData));
	};

	return (
		<div className="container p-5">
			<div className="reserve-bike grid grid-cols-3 gap-4">
				<div className="reser-img-form col-span-2 w-full bg-white rounded-lg">
					<div className="bike-res-img h-80 overflow-hidden grid grid-cols-2  gap-2 p-2">
						<img
							src={`http://127.0.0.1:8000/storage/uploads/${bike?.image}`}
							alt=""
							className="h-full hover:scale-110 duration-300 ease-in-out"
						/>
						<p className="text-justify max-h-80">{bike?.description}</p>
					</div>
					<div className=" container col-span-2">
						<Form
							form={form}
							onFinish={onFinish}
							className="grid grid-cols-2 align-middle">
							<Form.Item
								label="From"
								name="startDate"
								rules={[
									{ required: true, message: "Please select start date" },
								]}>
								<DatePicker
									placeholder="Start Date"
									onChange={handleStartDate}
								/>
							</Form.Item>
							<Form.Item
								label="To"
								name="endDate"
								rules={[
									{ required: true, message: "Please select end date" },
									{
										validator: (_, value) => {
											if (value && value.isBefore(dates.start)) {
												return Promise.reject(
													new Error("End date must be after start date")
												);
											}
											return Promise.resolve();
										},
									},
								]}>
								<DatePicker placeholder="End Date" onChange={handleEndDate} />
							</Form.Item>
							<Form.Item className=" col-span-2 flex justify-center ">
								<Button
									type="primary"
									htmlType="submit"
									className="w-72 bg-main"
									disabled={!dates.start || !dates.end}>
									Submit
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
				<div className="reserve-info w-full bg-white px-3 py-2 rounded-lg">
					<p className="p-0 m-0 text-5xl text-main">{bike?.brand}</p>
					<p className=" text-3xl">Type : {bike?.type}</p>
					<p>Made of :{bike?.material}</p>
					<p>Size : {bike?.size}</p>
					<p className="text-3xl">
						Price : {bike?.price_per_hour} <span className="text-sm"> $/h</span>
					</p>
					<p className="text-3xl">
						Total Price: <b className="text-main">{totalPrice}</b>{" "}
						<span className="text-sm"> $</span>
					</p>
				</div>
            </div>
            <div className="my-4 w-full flex justify-center">
                <p>Related </p>
            </div>
			<div className=" container gap-5 listing grid grid-cols-3 w-full pt-2">
				{bikes.map((bike) => {
					return <BikeCard key={bike.id} bike={bike} />;
				})}
			</div>
		</div>
	);
};

export default Reservation;
