import { createSlice } from "@reduxjs/toolkit";
const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return state ? [...state, ...action.payload] : action.payload;
    },
    removeFeed: (state, action) => {
      const id = action.payload;
      const newFeed = state.filter((user) => {
        if (user._id !== id) {
          return true;
        }
      });
      return newFeed;
    },
  },
});
export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
