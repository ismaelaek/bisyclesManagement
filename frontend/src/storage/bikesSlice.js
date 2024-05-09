import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";
import Cookies from 'js-cookie';

const initialState = {
	bikes: [],
	bikesIsLoading: false,
	bikesError: null,
};

const getBikes = createAsyncThunk("getBikes", async () => {
	try {
		const response = await axios.get("http://127.0.0.1:8000/api/bikes")
		return response.data;
	} catch (error) {
		console.log("error : ", error);
		throw error;
	}
});

const deleteBike = createAsyncThunk("deleteBike", async (bikeId) => {
	try {
		const token = Cookies.get("token");
		await axios.delete(`http://127.0.0.1:8000/api/bikes/${bikeId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		message.success("Bike deleted successfully");
		return bikeId;
	} catch (error) {
		console.error("Error deleting bike:", error);
		throw error;
	}
});

const bikesSlice = createSlice({
	name: "bikes",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBikes.pending, (state) => {
				state.bikesIsLoading = true;
				state.bikesError = null;
			})
			.addCase(getBikes.fulfilled, (state, action) => {
				state.bikesIsLoading = false;
				state.bikes = action.payload;
				state.bikesError = null;
			})
			.addCase(getBikes.rejected, (state, action) => {
				state.bikesIsLoading = false;
				state.bikesError = action.error.message;
			})
			.addCase(deleteBike.pending, (state) => {
				state.bikesIsLoading = true;
				state.bikesError = null;
			})
			.addCase(deleteBike.fulfilled, (state, action) => {
				state.bikesIsLoading = false;
				state.bikes = state.bikes.filter((user) => {
					user.id != action.payload;
				});
				state.bikesError = null;
			})
			.addCase(deleteBike.rejected, (state, action) => {
				state.bikesIsLoading = false;
				state.bikesError = action.error.message;
			});
	},
});

export { getBikes, deleteBike };
export default bikesSlice.reducer;
