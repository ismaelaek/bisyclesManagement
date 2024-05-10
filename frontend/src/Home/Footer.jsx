import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="w-full text-center p-4">
			ISTA Tinghir©{new Date().getFullYear()} Created by{" "}
			<Link to="https://github.com/ismaelaek"> Ismael </Link> and{" "}
			<Link to="https://github.com/yassinebattouch"> Yassine </Link>
		</div>
	);
};

export default Footer;
