import { createSlice } from "@reduxjs/toolkit";

const navslice = createSlice({
  name: "navslice",
  initialState: {
    message: "",
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetMessage: (state, action) => {
      state.message = "";
    },
  },
});

export default navslice.reducer;
export const { setMessage, resetMessage } = navslice.actions;
