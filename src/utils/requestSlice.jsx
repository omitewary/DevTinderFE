import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequests: (state, action) => action.payload,
    removeRequests: (state, action) =>
      state?.data?.filter((r) => r._id != action.payload),
  },
});

export const { addRequests, removeRequests } = requestSlice.actions;
export default requestSlice.reducer;
