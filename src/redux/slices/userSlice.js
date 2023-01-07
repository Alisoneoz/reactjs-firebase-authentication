import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    saveUser: (state, action) => {
      state.value = action.payload;
    },
  }
})

export const { saveUser } = userSlice.actions;

export const userReducer = userSlice.reducer;