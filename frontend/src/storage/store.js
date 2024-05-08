import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import dashboardSlice from "./dashboardSlice";
import usersSlice from "./usersSlice";
import bikesSlice from "./bikesSlice";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		dashboard: dashboardSlice,
		users: usersSlice,
		bikes: bikesSlice,
	},
});

export default store;
