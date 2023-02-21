import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/navslice";

export default configureStore({
  reducer: {
    messageReducer,
  },
});
