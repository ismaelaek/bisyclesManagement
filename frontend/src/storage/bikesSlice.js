import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    bikesData: [],
    isLoading: false,
    error: null
};

export const fetchBikeData = createAsyncThunk('bike/fetchBikeData', async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/users');
        return response.data;
        console.log(response.data);
    } catch (error) {
        throw new Error(error.message);
    }
});

const bikeSlice = createSlice({
    name: 'bike',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchBikeData.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchBikeData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.bikesData = action.payload;
            })
            .addCase(fetchBikeData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});
export default bikeSlice.reducer;
