import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});

export default store;
