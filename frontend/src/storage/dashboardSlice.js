import {createSlice } from '@reduxjs/toolkit';
const initialState = 'home';
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setActivePage(state , action) {
            return action.payload;
        },
    },
})

export const { setActivePage } = dashboardSlice.actions;
export default dashboardSlice.reducer;