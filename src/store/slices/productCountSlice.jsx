import { createSlice } from "@reduxjs/toolkit";

export const productCountSlice = createSlice({
  name: "productCount",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setInitialCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, setInitialCount } =
  productCountSlice.actions;

export default productCountSlice.reducer;
