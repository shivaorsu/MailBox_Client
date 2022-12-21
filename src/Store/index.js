import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authReducer";
import composeReducer from "./composeReducer";
const store = configureStore({
  reducer: { auth: authReducer, compose: composeReducer },
});

export default store;
