import React from "react";
import { Form, Input, Button, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddBike = () => {
	const onFinish = (values) => {
		// Log the form values
		console.log("Form values:", values);

		// Handle form submission here, e.g., dispatch an action to add the bike
		// You can dispatch an action here to add the bike using Redux or any other state management tool
	};

	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList && e.fileList.length > 0 ? [e.fileList[0]] : [];
	};


	const materialOptions = ["carbon fiber", "titanium", "steel", "aluminum"];
	const brandOptions = [
		"Trek",
		"Specialized",
		"Giant",
		"Cannondale",
		"Scott",
		"Santa Cruz",
		"Cervelo",
		"Bianchi",
		"Raleigh",
		"Merida",
		"Cube",
		"Fuji",
	];
	const typeOptions = [
		"Mountain",
		"Road",
		"Hybrid",
		"Cruiser",
		"Electric",
		"BMX",
		"Folding",
		"Gravel",
		"City",
		"Touring",
		"Track",
		"VTT",
	];
	const sizeOptions = ["M", "L", "XL", "XXL"];

	return (
		<div className="flex py-4">
			<div className="w-full">
				<Form
					name="addBikeForm"
					onFinish={onFinish}
					className="grid grid-cols-2 w-full justify-between"
					initialValues={{
						isRented: false, 
					}}
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}>
					<Form.Item
						label="Brand"
						name="brand"
						rules={[
							{
								required: true,
								message: "Please input the brand of bike!",
							},
						]}>
						<Select>
							{brandOptions.map((brand) => (
								<Option key={brand} value={brand}>
									{brand}
								</Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item
						label="Type"
						name="type"
						rules={[
							{
								required: true,
								message: "Please input the type of bike!",
							},
						]}>
						<Select>
							{typeOptions.map((type) => (
								<Option key={type} value={type}>
									{type}
								</Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item
						label="Size"
						name="size"
						rules={[
							{
								required: true,
								message: "Please input the size of bike!",
							},
						]}>
						<Select>
							{sizeOptions.map((size) => (
								<Option key={size} value={size}>
									{size}
								</Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item
						label="Material"
						name="material"
						rules={[
							{
								required: true,
								message: "Please select the material of bike!",
							},
						]}>
						<Select>
							{materialOptions.map((material) => (
								<Option key={material} value={material}>
									{material}
								</Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item
						label="Price Per Hour"
						name="price_per_hour"
						rules={[
							{
								required: true,
								message: "Please input the price per hour!",
							},
						]}>
						<Input />
					</Form.Item>
					<Form.Item
						label="Description"
						name="description"
						rules={[
							{
								required: true,
								message: "Please input the description of bike!",
							},
						]}>
						<Input.TextArea />
					</Form.Item>
					<Form.Item
						name="image"
						label="Image"
						valuePropName="fileList"
						getValueFromEvent={normFile}
						rules={[
							{
								required: true,
								message: "Please upload an image of the bike!",
							},
						]}>
						<Upload
							name="image"
							listType="picture"
							accept=".png,.jpeg,.jpg"
							multiple={false}
							beforeUpload={() => false}>
							<Button icon={<UploadOutlined />}>Upload</Button>
						</Upload>
					</Form.Item>
					<Form.Item name="isRented" valuePropName="checked" hidden>
						<Input type="hidden" />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit" className="w-full mt-3">
							Add Bike
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default AddBike;
