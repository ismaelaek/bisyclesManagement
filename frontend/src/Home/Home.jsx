import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home-container">
			<Navbar />
			<div className="home-banner-container">
				<div className="home-bannerImage-container">
					<img src={BannerBackground} alt="" />
				</div>
				<div className="home-text-section">
					<h1 className="primary-heading">
						Explore the Outdoors on Two Wheels
					</h1>
					<p className="primary-text">
						Discover the joy of cycling with our premium bicycles. From
						leisurely rides to adrenaline-pumping trails, we have the perfect
						ride for every adventure.
					</p>
					<Link to={'/login'} className=" no-underline">
						<button className="secondary-button">
							Rent Now <FiArrowRight />{" "}
						</button>
					</Link>
				</div>
				<div className="home-image-section">
					<img src={BannerImage} alt="" />
				</div>
			</div>
		</div>
	);
};


export default Home;
