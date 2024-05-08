import React from "react";
import { Form, Input, Button, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddBike = () => {
	const onFinish = (values) => {
		// Handle form submission here, e.g., dispatch an action to add the bike
		console.log("Received values:", values);
	};

	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	const materialOptions = ["carbon fiber", "titanium", "steel", "aluminum"];

	return (
		<div className="flex">
			<div className="w-1/2 p-4">
				<Form
					name="addBikeForm"
					onFinish={onFinish}
					initialValues={{
						isRented: false, // Default value for isRented
					}}
					labelCol={{
						span: 8, // Adjust the label column width as needed
					}}
					wrapperCol={{
						span: 16, // Adjust the input column width as needed
					}}>
					<Form.Item
						label="Type"
						name="type"
						rules={[
							{
								required: true,
								message: "Please input the type of bike!",
							},
						]}>
						<Input />
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
						<Input />
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
						label="Brand"
						name="brand"
						rules={[
							{
								required: true,
								message: "Please input the brand of bike!",
							},
						]}>
						<Input />
					</Form.Item>
				</Form>
			</div>
			<div className="w-1/2 p-4">
				<Form
					name="addBikeForm"
					onFinish={onFinish}
					initialValues={{
						isRented: false,
					}}
					labelCol={{
						span: 8, // Adjust the label column width as needed
					}}
					wrapperCol={{
						span: 16, // Adjust the input column width as needed
					}}>
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
							beforeUpload={() => false}>
							<Button icon={<UploadOutlined />}>Upload</Button>
						</Upload>
					</Form.Item>
					<Form.Item name="isRented" valuePropName="checked" hidden>
						<Input type="hidden" />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Add Bike
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default AddBike;
