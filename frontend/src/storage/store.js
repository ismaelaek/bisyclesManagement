import { configureStore } from '@reduxjs/toolkit';
import bikesSlice from './bikesSlice';
import dashboardSlice from './dashboardSlice';

const store = configureStore({
    reducer: {
        bikes: bikesSlice,
        dashboard: dashboardSlice
    }
})
export default store;