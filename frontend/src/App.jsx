import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./auth/login";
import Navbar from "./components/navbar";

import "./App.css";

// resolve conflicts

function App() {
  const location = useLocation();
  const NavBarContainer = () => {
		if (location.pathname !== "/login") return <Navbar />;
	};

  return (
		<>
			<NavBarContainer />
			<Routes>
				<Route path="/" element={<h1> hello React + Laravel </h1>} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<h1> Dashboard </h1>} />

				<Route path="*" element={<h1>Page Not Found</h1>} />
			</Routes>
		</>
	);
}

export default App;
