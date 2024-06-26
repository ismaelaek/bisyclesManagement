import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import dashboardSlice from "./dashboardSlice";
import usersSlice from "./usersSlice";
import bikesSlice from "./bikesSlice";
import rentalsSlice from "./rentalsSlice";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		dashboard: dashboardSlice,
		users: usersSlice,
		bikes: bikesSlice,
		rentals: rentalsSlice,
	},
});

export default store;
