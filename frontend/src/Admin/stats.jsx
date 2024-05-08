import React from "react";
import { FaUsers } from "react-icons/fa";
import { LuBike } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";



export default function Statistics() {
	return (
		<div className="p-3">
			<div className=" flex gap-3 justify-between">
				<div className="stats-card bg-red-400 ">
					<div>
						<h4>Customers</h4>
					</div>
					<div className="stats-card-icon">
						<FaUsers className="text-9xl" />
					</div>
				</div>
				<div className=" stats-card bg-yellow-400 ">
					<div>
						<h4>Bikes</h4>
					</div>
					<div className="stats-card-icon">
						<LuBike className="text-9xl" />
					</div>
				</div>
				<div className=" stats-card bg-green-400 ">
					<div>
						<h4>Income</h4>
					</div>
					<div className="stats-card-icon">
						<GrMoney className="text-9xl" />
					</div>
				</div>
			</div>
		</div>
	);
}
