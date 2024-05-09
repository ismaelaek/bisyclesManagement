import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBikes } from "../storage/bikesSlice";
import ThumbImage from "../assets/thumb_image.png";
import Loader from "./loader";
import BikeCard from "./bikeCard";
import { Input } from "antd";
const { Search } = Input;

const Home = () => {
	const dispatch = useDispatch();
	const { bikes, bikesIsLoading } = useSelector(state => state.bikes)
	
	useEffect(() => {
		dispatch(getBikes());
	}, [dispatch]);
	console.log(bikes);
	return (
		<main className="pb-5">
			<div className="thumbnail">
				<h1 className="text-9xl">RENT A BIKE</h1>
				<img src={ThumbImage} alt="" width={500} />
			</div>
			<div className="search w-2/3 bg-white h-28  flex justify-between items-center p-4">
				<div className=" flex w-1/3">
					<Search type=""  ico/>
				</div>
				<div>
					hhh
				</div>
				<div>
					fdfda
				</div>
			</div>
			{bikesIsLoading ? (
				<Loader />
			) : (
				<div className=" container gap-5 listing grid grid-cols-3 w-full mt-5 pt-8">
					{bikes.map((bike) => {
						return <BikeCard bike={bike} />;
					})}
				</div>
			)}
		</main>
	);
}

export default Home;
