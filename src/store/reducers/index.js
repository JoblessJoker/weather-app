import { weatherReducer } from "./weatherReducer";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
    data: weatherReducer
});

export default reducers;