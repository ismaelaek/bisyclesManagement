import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./auth/login";
import Navbar from "./components/navbar";
import Dashboard from "./Admin/dashboard";
import Home from "./components/home";
import NotFound from "./components/notFound";

import "./App.css";


function App() {
	const location = useLocation();
	const NavBarContainer = () => {
			if (location.pathname !== "/login" && location.pathname !== "/dashboard") return <Navbar />;
		};

	return (
		<>
			<NavBarContainer />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;


