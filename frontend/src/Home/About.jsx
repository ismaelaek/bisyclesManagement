import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="about-section-container">
			<div className="about-background-image-container">
				<img src={AboutBackground} alt="" height={200} />
			</div>
			<div className="about-section-image-container">
				<img src={AboutBackgroundImage} alt="" />
			</div>
			<div className="about-section-text-container">
				<p className="primary-subheading">About Us</p>
				<h1 className="primary-heading">Experience Freedom on Two Wheels</h1>
				<p className="primary-text">
					At <b className=" underline">Rent A Bike</b>, we believe that cycling
					is not just a physical activity but a way of life. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit. Nulla vitae justo eget est
					lacinia rhoncus. Nullam in velit nec justo fringilla placerat.
				</p>
				<p className="primary-text">
					Whether you're a seasoned rider or a novice, we provide top-quality
					bicycles and accessories to make your biking experience unforgettable.
					Join us and explore the world on two wheels.
				</p>
				<div className="about-buttons-container">
					<Link to={'/register'} className=" no-underline">
						<button className="secondary-button">Join Now</button>
					</Link>
				</div>
			</div>
		</div>
	);
};


export default About;
