import { combineReducers, configureStore } from "@reduxjs/toolkit";
import imageReducer from "./searchSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const myCombinedReducer = combineReducers({
  image: imageReducer,
});

const localStorageReducer = persistReducer(persistConfig, myCombinedReducer);

const store = configureStore({
  reducer: localStorageReducer,
});

export default store;
