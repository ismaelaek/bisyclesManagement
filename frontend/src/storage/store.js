import { configureStore } from '@reduxjs/toolkit';
import bikesSlice from './bikesSlice';
import dashboardSlice from './dashboardSlice';
import themeSlice from './themeSlice';

const store = configureStore({
    reducer: {
        bikes: bikesSlice,
        dashboard: dashboardSlice,
        theme : themeSlice,
    }
})
export default store;