import React from "react";
import imageTest from "../assets/home-banner-image.png";

export default function BikeCard({ bike }) {
    return (
			<div className="card bike-card">
            <div className="card-img overflow-hidden h-48 flex justify-center">
                <img src={imageTest} alt="" className="h-full hover:scale-110 duration-300 ease-in-out"/>
                </div>
				<div className="card-info px-4 ">
					<h3>{bike.type}</h3>
					<p className="text-3xl">{bike.price_per_hour} <span className="text-sm" > $/h</span> </p>
				</div>
			</div>
		);
}
