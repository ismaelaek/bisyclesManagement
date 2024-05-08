import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles/landing.css"
function Landing() {
	return (
		<div className="App">
			<Home />
			<About />
			<Work />
			<Testimonial />
			<Contact />
			<Footer />
		</div>
	);
}

export default Landing;
