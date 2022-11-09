import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

const initialState = {
  user: null,
  isLogged: false,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setIsLogged: (state, { payload }: PayloadAction<boolean>) => {
      state.isLogged = payload;
    },
  },
});

export const getUserIsLoggedSelector = (state: RootState) =>
  state.userAuth.isLogged;

export const { setIsLogged } = userAuthSlice.actions;

export default userAuthSlice.reducer;
