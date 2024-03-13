import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getEndpoint } from './api';

const initialState = {
    bikes: [],
    isLoading: false,
    error: null
};

export const fetchBikeData = createAsyncThunk('bike/fetchBikeData', async () => {
    try {
        const response = await axios.get(getEndpoint('bikes'));
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

const bikeSlice = createSlice({
    name: 'bikes',
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
                state.bikes = action.payload;
            })
            .addCase(fetchBikeData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});
export default bikeSlice.reducer;
