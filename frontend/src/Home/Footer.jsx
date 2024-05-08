import React from "react";
import Logo from "../assets/logo.png"
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer-section-one">
				<div className="footer-logo-container">
					<img src={Logo} alt="" />
				</div>
				<div className="footer-icons">
					<BsTwitter />
					<SiLinkedin />
					<BsYoutube />
					<FaFacebookF />
				</div>
			</div>
			<div className="footer-section-two">
				<div className="footer-section-columns">
					<span>About Us</span>
					<span>Contact Us</span>
					<span>Rentals</span>
					<span>Locations</span>
					<span>FAQs</span>
					<span>Blog</span>
				</div>
				<div className="footer-section-columns">
					<span>123-456-7890</span>
					<span>hello@bikerentals.com</span>
					<span>press@bikerentals.com</span>
					<span>partnerships@bikerentals.com</span>
				</div>
				<div className="footer-section-columns">
					<span>Terms & Conditions</span>
					<span>Privacy Policy</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
