import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./auth";
import cartSlice from "./cart";

const reducers = combineReducers({ 
    auth: authSlice,
    cart: cartSlice,
 });

export default reducers;
