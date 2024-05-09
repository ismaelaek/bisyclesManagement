import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";
import Cookies from "js-cookie";

const initialState = {
	users: [],
	usersIsLoading: false,
	usersError: null,
};

const getUsers = createAsyncThunk("getUsers", async () => {
	try {
		const token = Cookies.get("token");
		const response = await axios.get("http://127.0.0.1:8000/api/users", {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
});

const deleteUser = createAsyncThunk("deleteUser", async (userId) => {
	try {
		const token = Cookies.get("token");
		await axios.delete(`http://127.0.0.1:8000/api/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		message.success("User deleted successfully");
		return userId;
	} catch (error) {
		console.error("Error deleting user:", error);
		throw error;
	}
});

const UsersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.usersIsLoading = true;
				state.usersError = null;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.usersIsLoading = false;
				state.users = action.payload;
				state.usersError = null;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.usersIsLoading = false;
				state.usersError = action.error.message;
			})
			.addCase(deleteUser.pending, (state) => {
				state.usersIsLoading = true;
				state.usersError = null;
			})
			.addCase(deleteUser.fulfilled, (state, action) => {
				state.usersIsLoading = false;
				state.users = state.users.filter(user => {
					user.id != action.payload;
				})
				state.usersError = null;
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.usersIsLoading = false;
				state.usersError = action.error.message;
			});
	},
});

export { getUsers, deleteUser };
export default UsersSlice.reducer;
