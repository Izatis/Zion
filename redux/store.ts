import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth.slice";
import emailSlice from "./reducers/email.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    email: emailSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
