import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const menuOptions = [
		{
			text: "Home",
			icon: <HomeIcon />,
		},
		{
			text: "About",
			icon: <InfoIcon />,
		},
		{
			text: "Testimonials",
			icon: <CommentRoundedIcon />,
		},
		{
			text: "Contact",
			icon: <PhoneRoundedIcon />,
		},
	];
	return (
		<nav>
			<div className="nav-logo-container">
				<Link to={"/"}>
					<img src={Logo} alt="" width={80} />
				</Link>
			</div>
			<div className="flex gap-4">
				<Link to={"/login"} className=" no-underline">
					<button className="primary-button">
						Rent Now <FiArrowRight />
					</button>
				</Link>
			</div>
			<div className="navbar-menu-container">
				<HiOutlineBars3 onClick={() => setOpenMenu(true)} />
			</div>
			<Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
				<Box
					sx={{ width: 250 }}
					role="presentation"
					onClick={() => setOpenMenu(false)}
					onKeyDown={() => setOpenMenu(false)}>
					<List>
						{menuOptions.map((item) => (
							<ListItem key={item.text} disablePadding>
								<ListItemButton>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText primary={item.text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
				</Box>
			</Drawer>
		</nav>
	);
};

export default Navbar;
