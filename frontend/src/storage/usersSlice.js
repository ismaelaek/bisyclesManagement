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
		const response = await axios.get(
			"http://127.0.0.1:8000/api/users",
			{
				headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
				},
			}
        );
        return response.data;
    } catch (error) {
        console.log('error : ', error);
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
	},
});

export {
	getUsers,
};
export default UsersSlice.reducer;
