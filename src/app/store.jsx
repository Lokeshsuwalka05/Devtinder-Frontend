import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
