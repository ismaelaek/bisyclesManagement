import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getEndpoint } from './api';

const initialState = {
    customers: [],
    isLoading: false,
    error: null
};

export const fetchCostumers = createAsyncThunk('bike/fetchCostumers', async () => {
    try {
        const response = await axios.get(getEndpoint('customers'));
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCostumers.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCostumers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.customers = action.payload;
            })
            .addCase(fetchCostumers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});
export default customerSlice.reducer;
