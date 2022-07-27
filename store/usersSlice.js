import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    removeUser: (state) => {
      state.users = [];
      console.log(state.users);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export const users = (state) => state.users;
export default usersSlice.reducer;
