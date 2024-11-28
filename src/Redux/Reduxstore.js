import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./Authreducer.js";
import { userReducer } from "./Userreducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
}); // combine reducers to create a single reducer function that can be passed to the store configuration

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
}); // create a store with the combined reducer function and enable Redux DevTools 

export default store;
