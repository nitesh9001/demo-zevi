import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {},
  reducers: {
    PRODUCT_LIST: (user, action) => {
        return { ...user, ...action.payload };
    },
  },
});

export const { PRODUCT_LIST } = slice.actions;

export default slice.reducer;
