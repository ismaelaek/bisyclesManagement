import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getEndpoint } from './api';

const initialState = {
    feedbacks: [],
    isLoading: false,
    resMessage: '',
    error: null
};

export const fetchFeedbacks = createAsyncThunk('feedbacks/fetchFeedbacks', async () => {
    try {
        const response = await axios.get(getEndpoint('feedbacks'));
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});


const feedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFeedbacks.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFeedbacks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.feedbacks = action.payload;
            })
            .addCase(fetchFeedbacks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

    }
});
export default feedbacksSlice.reducer;
