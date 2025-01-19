import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice/index";
import authReducer from "./auth-slice/index";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});

export default store;
