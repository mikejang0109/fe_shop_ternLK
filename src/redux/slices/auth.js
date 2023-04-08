import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: "",
	newToken: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		save: (prevState, action) => {
			return {
				...prevState,
				token: action.payload,
			};
		},
		delete: (prevState) => {
			return {
				...prevState,
				token: "",
			};
		},
	},
});

export const authAction = { ...authSlice.actions };
export default authSlice.reducer;
