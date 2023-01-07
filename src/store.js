import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./Redux/Reducer";

const persistConfig = {
  key: "root",
  storage
};
const initialState = JSON.parse(window.localStorage.getItem('persist:root'))
const persistedReducer = persistReducer(persistConfig, rootReducer);
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const { REACT_APP_ENABLE_REDUX_DEV_TOOLS } = process.env;
const enableDevTools =
  process.env.NODE_ENV === "development" ||
  REACT_APP_ENABLE_REDUX_DEV_TOOLS === "true";
export const store = configureStore({
  reducer: persistedReducer,
  initialState,
  middleware: customizedMiddleware,
  devTools: enableDevTools,
});

export const persistor = persistStore(store);
