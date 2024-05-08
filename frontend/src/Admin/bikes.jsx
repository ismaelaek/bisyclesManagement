import React, { useEffect } from "react";
import { getBikes } from "../storage/bikesSlice";
import { useSelector, useDispatch } from "react-redux";
import BikeItem from "./bikeItem";

export default function BikesList() {
	const dispatch = useDispatch();
	const { bikes, bikesIsLoading } = useSelector((state) => state.bikes);

	useEffect(() => {
		dispatch(getBikes());
	}, [dispatch]);

	return (
		<div>
			{bikes.length === 0 ? (
				<p>No bikes available</p>
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
						{bikes.map((bike) => (
							<BikeItem key={bike.id} bike={bike} />
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}
