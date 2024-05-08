import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";

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
			});
	},
});

export { getBikes };
export default bikesSlice.reducer;
