import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "@store/features/user/userAuth.slice";
import userDetailsReducer from "@store/features/user/userDetails.slice";

const Store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    userDetails: userDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
