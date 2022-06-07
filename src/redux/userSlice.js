import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [{ id: 1, name: "Durgesh" }],
  reducers: {
    addUser: (state, action) => {
      const user = {
        id: action.payload.id,
        name: action.payload.name,
      };
      return [...state, user];
    },
    removeUser: (state, action) => {
      return state.filter((element) => element.id !== action.payload.id);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
