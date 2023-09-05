import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  podcastSelected: null,
};

export const podcastSelectedSlice = createSlice({
  name: "podcastSelected",
  initialState,
  reducers: {
    addPodcastSelected: (state, action) => {
      state.podcastSelected = action.payload;
    },
  },
});

export const { addPodcastSelected } = podcastSelectedSlice.actions;
export default podcastSelectedSlice.reducer;
