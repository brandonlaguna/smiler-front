import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoggedIn } = UserSlice.actions;

export default UserSlice.reducer;
