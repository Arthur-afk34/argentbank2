import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './Authreducer.js';
const rootReducer = combineReducers({
   auth: authReducer,
   
})
const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})
export default store