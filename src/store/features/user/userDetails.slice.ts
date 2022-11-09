import { UserType } from "@dtos/user.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

type UserDetailsSliceType = {
  user: UserType | null;
};

const initialState: UserDetailsSliceType = {
  user: null,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserType>) => {
      state.user = payload;
    },
  },
});

export const getUserDetailsAction = (state: RootState) =>
  state.userDetails.user;

export const { setUser } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
