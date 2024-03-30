import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./rootSlice";

const reducers = combineReducers({
  root: rootSlice,
});

const store = configureStore({ reducers });

export default store;
