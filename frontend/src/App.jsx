import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./storage/store";
import Login from "./auth/login";
import Navbar from "./components/navbar";
import Dashboard from "./Admin/dashboard";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Register from "./auth/register";
import Landing from "./Home/main";

import "./App.css";


function App() {
	const location = useLocation();
	const NavBarContainer = () => {
		if (
			location.pathname !== "/" &&
			location.pathname !== "/login" &&
			location.pathname !== "/dashboard" &&
			location.pathname !== "/register"
		)
			return <Navbar />;
		};

	return (
		<Provider store={store}>
			<NavBarContainer />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Provider>
	);
}

export default App;


