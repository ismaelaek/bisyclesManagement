import React, { useEffect, useState } from "react";
import { getBikes } from "../storage/bikesSlice";
import { useSelector, useDispatch } from "react-redux";
import BikeItem from "./bikeItem";
import { FaSearch } from "react-icons/fa";

export default function BikesList() {
	const dispatch = useDispatch();
	const { bikes, bikesIsLoading } = useSelector((state) => state.bikes);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		dispatch(getBikes());
	}, [dispatch]);

	const filteredBikes = bikes.filter(
		(bike) =>
			bike.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
			bike.type.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	return (
		<div className="pt-2">
			<div className="flex items-center justify-center mb-4">
				<input
					type="text"
					placeholder="Search by brand or type"
					value={searchQuery}
					onChange={handleSearchChange}
					className="border border-gray-300 px-4 py-2 mr-2 rounded-md w-2/4"
				/>
				<FaSearch className="text-gray-600" />
			</div>
			{filteredBikes.length === 0 ? (
				<p>No bikes found</p>
			) : (
				<table className="w-full">
					<thead>
						<tr>
							<th>Type</th>
							<th>Size</th>
							<th>Price Per Hour</th>
							<th>Material</th>
							<th>Brand</th>
							<th className="pl-2">Description</th>
							<th>Disponible</th>
						</tr>
					</thead>
					<tbody>
						{filteredBikes.map((bike) => (
							<BikeItem key={bike.id} bike={bike} />
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}
