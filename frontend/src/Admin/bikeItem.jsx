import React from "react";

export default function BikeItem({ bike }) {
	return (
		<tr>
			<td>{bike.type}</td>
			<td>{bike.size}</td>
			<td>{bike.price_per_hour}$</td>
			<td>{bike.material}</td>
			<td>{bike.brand}</td>
            <td className=" overflow-hidden text-nowrap max-w-28 ">
                {bike.description}
            </td>
			<td className="flex items-center gap-2">
				{bike.isRented ? (
					<>
						<div className="w-2 h-2 bg-green-200 rounded-xl"></div>
						Yes
					</>
				) : (
					<>
						<div className="w-2 h-2 bg-red-200 rounded-xl"></div>
						No
					</>
				)}
			</td>
		</tr>
	);
}
