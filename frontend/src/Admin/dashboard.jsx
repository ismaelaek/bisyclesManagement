import React, { useState } from "react";
import {
	PieChartOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { MdOutlineDirectionsBike, MdOutlineFeedback } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import { FaMoon, FaSun } from "react-icons/fa";
import {Layout, Menu, theme , Switch} from "antd";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
const items = [
	getItem("Statistics", "1", <PieChartOutlined />),
	getItem("Bikes", "2", <MdOutlineDirectionsBike />),
	getItem("Users", "3", <UserOutlined />),
	getItem("Add Bike", "4", <IoIosAddCircleOutline />),
	getItem("Feedbacks", "5", <MdOutlineFeedback />),
];
const Dashboard = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout
			style={{
				minHeight: "100vh",
			}}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
				theme="light"
				className="pt-2">
				<Menu
					theme="light"
					defaultSelectedKeys={["1"]}
					mode="inline"
					items={items}
				/>
			</Sider>
			<Layout>
				<Header className=" bg-white h-12 flex justify-between px-4 items-center">
					<h3>Dashboard</h3>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <FaSun color="black" />
                            <Switch size="small" />
                            <FaMoon color="black" size={15} />
                        </div>
						<img src={Logo} alt="" width={50} />
					</div>
				</Header>
				<Content
					style={{
						margin: "16px",
					}}>
					<main className=" h-full bg-white"></main>
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}>
					ISTA Tinghir©{new Date().getFullYear()} Created by{" "}
					<Link to="https://github.com/ismaelaek">Ismael</Link> and{" "}
					<Link to="https://github.com/ismaelaek">Yassine</Link>
				</Footer>
			</Layout>
		</Layout>
	);
};
export default Dashboard;
