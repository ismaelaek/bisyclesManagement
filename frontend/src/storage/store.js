import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import dashboardSlice from "./dashboardSlice";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		dashboard: dashboardSlice,
	},
});

export default store;
