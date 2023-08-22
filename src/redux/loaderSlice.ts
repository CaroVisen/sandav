import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    addLoader: (state, action) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
    changeLoader: (state, action) => {
      state.isLoading = action.payload;
      console.log(state.isLoading);
    },
  },
});

export const { addLoader, changeLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
