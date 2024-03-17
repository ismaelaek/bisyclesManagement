import { configureStore } from '@reduxjs/toolkit';
import bikesSlice from './bikesSlice';
import customersSlice from './customersSlice';
import dashboardSlice from './dashboardSlice';
import themeSlice from './themeSlice';
import feedbackSlice from './feedbackSlice';

const store = configureStore({
    reducer: {
        bikes: bikesSlice,
        dashboard: dashboardSlice,
        theme: themeSlice,
        customers: customersSlice,
        feedbacks: feedbackSlice,
        
    }
})
export default store;