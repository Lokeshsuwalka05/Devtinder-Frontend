import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const id = action.payload;
      const newArray = state.filter((request) => {
        if (request._id !== id) {
          return true;
        }
      });
      return newArray;
    },
  },
});
export const { addRequests, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
