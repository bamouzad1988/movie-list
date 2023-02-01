import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userRole: "guest",
  },
  reducers: {
    chengeRole(state, action) {
      state.userRole = action.payload;
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice;
