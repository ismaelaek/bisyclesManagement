import React from "react";
// import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
	return (
		<div className="work-section-wrapper">
			<div className="work-section-top">
				<p className="primary-subheading">Testimonials</p>
				<h1 className="primary-heading">What Our Customers Say</h1>
				<p className="primary-text">
					See what our customers have to say about their biking experiences.
				</p>
			</div>
			<div className="testimonial-section-bottom">
				{/* <img src={ProfilePic} alt="" /> */}
				<p>
					"I had an amazing experience renting a bike from this company. The
					bike was in great condition, and the rental process was smooth and
					easy. I'll definitely be renting from them again!"
				</p>
				<div className="flex gap-2 text-yellow-600">
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
				<h2>John Doe</h2>
			</div>
		</div>
	);
};

export default Testimonial;
