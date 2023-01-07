import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "category",
  initialState: {},
  reducers: {
    CATEGORY_LIST: (user, action) => {
        return { ...user, ...action.payload };
    },
  },
});

export const { CATEGORY_LIST } = slice.actions;

export default slice.reducer;
