import React from "react";
import { TbReportSearch } from "react-icons/tb";
import { BsCalendar2Date } from "react-icons/bs";
import { MdDirectionsBike } from 'react-icons/md';



const Work = () => {
	const workInfoData = [
		{
			icon: <TbReportSearch className="text-5xl" />,
			title: "Browse Our Bikes",
			text: "Explore our diverse collection of bicycles suitable for all types of riders. From sleek city bikes to rugged mountain bikes, we have something for everyone.",
		},
		{
			icon: <BsCalendar2Date className="text-5xl" />,
			title: "Select Your Rental Period",
			text: "Choose how long you want to rent your bike for, whether it's for a few hours, a day, or even a week. We offer flexible rental options to suit your needs.",
		},
		{
			icon: <MdDirectionsBike className="text-5xl" />,
			title: "Efficient Pickup & Drop-off",
			text: "Enjoy hassle-free rental experience with our convenient pickup and drop-off locations. Our team ensures quick and efficient service so you can hit the road without delay.",
		},
	];
	return (
		<div className="work-section-wrapper">
			<div className="work-section-top">
				<p className="primary-subheading">How It Works</p>
				<h1 className="primary-heading">Renting a Bike Made Easy</h1>
				<p className="primary-text">
					Discover how simple it is to rent a bike and embark on your adventure.
				</p>
			</div>
			<div className="work-section-bottom">
				{workInfoData.map((data) => (
					<div className="work-section-info" key={data.title}>
						<div className="info-boxes-img-container">
							{data.icon}
						</div>
						<h2>{data.title}</h2>
						<p>{data.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
