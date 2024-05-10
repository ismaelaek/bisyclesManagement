import React from "react";
import Link from "antd/es/typography/Link";
import { FaArrowRight } from "react-icons/fa";


export default function BikeCard({ bike }) {
	return (
		<div className="card bike-card px-2 py-1">
			<div className="container">
				<p className="text-3xl p-0 m-0 text-bold">{bike.brand}</p>
				<p className="text-sm">{bike.size}</p>
			</div>
			<div className="overflow-hidden h-48 flex justify-center">
				<img
					src={`http://127.0.0.1:8000/storage/uploads/${bike.image}`}
					alt=""
					className="h-full hover:scale-110 duration-300 ease-in-out"
				/>
			</div>
			<div className="card-info px-4 ">
				<p className="text-2xl p-0 m-0">Type : {bike.type}</p>
				<p className="text-sm min-h-32 overflow-hidden text-justify">
					{bike.description}
				</p>
				<div className="flex justify-between">
					<p className="text-3xl">
						{bike.price_per_hour} <span className="text-sm"> $/h</span>
					</p>
					<button className="flex items-center gap-2 overflow-hidden">
						<span>Reserve</span>
						<FaArrowRight className="arrow" />
					</button>
				</div>
			</div>
		</div>
	);
}
