import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBikes } from "../storage/bikesSlice";
import ThumbImage from "../assets/thumb_image.png";
import Loader from "./loader";
import BikeCard from "./bikeCard";
import { Input, Select } from "antd";
const { Search } = Input;
const { Option } = Select;

const Home = () => {
	const dispatch = useDispatch();
	const { bikes, bikesIsLoading } = useSelector((state) => state.bikes);
	const [filteredBikes, setFilteredBikes] = useState([]);
	const bicycleTypes = [
		"",
		"Mountain",
		"Road",
		"Hybrid",
		"Cruiser",
		"Electric",
		"BMX",
		"Folding",
		"Gravel",
		"City",
		"Touring",
		"Track",
		"VTT",
	];
	const bicycleBrands = [
		"",
		"Trek",
		"Specialized",
		"Giant",
		"Cannondale",
		"Scott",
		"Santa Cruz",
		"Cervelo",
		"Bianchi",
		"Raleigh",
		"Merida",
		"Cube",
		"Fuji",
	];

	useEffect(() => {
		dispatch(getBikes());
	}, [dispatch]);

	useEffect(() => {
		setFilteredBikes(bikes);
	}, [bikes]);

	const handleSearch = (value) => {
		const filtered = bikes.filter((bike) => {
			return (
				bike.brand.toLowerCase().includes(value.toLowerCase()) ||
				bike.type.toLowerCase().includes(value.toLowerCase())
			);
		});
		setFilteredBikes(filtered);
	};

	const handleFilter = (type, value) => {
		if (type === "brand") {
			const filtered = bikes.filter((bike) =>
				bike.brand.toLowerCase().includes(value.toLowerCase())
			);
			setFilteredBikes(filtered);
		} else if (type === "type") {
			const filtered = bikes.filter((bike) =>
				bike.type.toLowerCase().includes(value.toLowerCase())
			);
			setFilteredBikes(filtered);
		}
	};

	return (
		<main className="pb-5">
			<div className="thumbnail">
				<h1 className="text-9xl">RENT A BIKE</h1>
				<img src={ThumbImage} alt="" width={500} />
				<div className="text-center pt-3">
					<p className="text-2xl">
						Make the right choice and pedal towards your dream ride
					</p>
					<p className="text-3xl">Find the bicycle that gives you wings!</p>
				</div>
			</div>
			<div className="flex w-full justify-center">
				<div className="search w-2/3 bg-white flex justify-between items-center p-4">
					<div className=" flex">
						<Search
							placeholder="Search by brand or type"
							onSearch={handleSearch}
							enterButton
						/>
					</div>

					<div className="flex items-center w-1/2 gap-2">
						<p className="text-nowrap pt-3">I want to rent a </p>
						<Select
							placeholder="Brand"
							className="w-full"
							onChange={(value) => handleFilter("brand", value)}>
							{bicycleBrands.map((brand) => (
								<Option key={brand} value={brand}>
									{brand}
								</Option>
							))}
						</Select>

						<Select
							placeholder="Type"
							className="w-full"
							onChange={(value) => handleFilter("type", value)}>
							{bicycleTypes.map((type) => (
								<Option key={type} value={type}>
									{type}
								</Option>
							))}
						</Select>
					</div>
				</div>
			</div>
			{bikesIsLoading ? (
				<Loader />
			) : (
				<div className=" container gap-5 listing grid grid-cols-3 w-full mt-5 pt-8">
					{filteredBikes.length === 0 ? (
						<h1 className="text-center">No Bikes found</h1>
					) : (
						filteredBikes.map((bike) => {
							return <BikeCard key={bike.id} bike={bike} />;
						})
					)}
				</div>
			)}
		</main>
	);
};

export default Home;
