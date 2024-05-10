import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";
import Cookies from "js-cookie";

const initialState = {
	rentals: [],
	rentalsIsLoading: false,
	rentalsError: null,
};

const getRentals = createAsyncThunk("getRentals", async () => {
	try {
		const response = await axios.get("http://127.0.0.1:8000/api/rentals");
		return response.data;
	} catch (error) {
		console.log("error : ", error);
		throw error;
	}
});

const addRental = createAsyncThunk("addRental", async (formData) => {
	try {
		const response = await axios.post("http://127.0.0.1:8000/api/rentals", formData);
		return response.data;
	} catch (error) {
		console.log("error : ", error);
		throw error;
	}
});


const rentalsSlice = createSlice({
	name: "bikes",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getRentals.pending, (state) => {
				state.rentalsIsLoading = true;
				state.rentalsError = null;
			})
			.addCase(getRentals.fulfilled, (state, action) => {
				state.rentalsIsLoading = false;
				state.rentals = action.payload;
				state.rentalsError = null;
			})
			.addCase(getRentals.rejected, (state, action) => {
				state.rentalsIsLoading = false;
				state.rentalsError = action.error.message;
			});
	},
});

export { getRentals, addRental};
export default rentalsSlice.reducer;