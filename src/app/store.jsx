import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import feedReducer from "../features/feed/feedSlice";
export const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
});
