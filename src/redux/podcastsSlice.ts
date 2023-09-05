import { createSlice } from "@reduxjs/toolkit";
import { PodcastEntry } from "../types/PodcastTypes";

const initialState = {
  podcasts: [],
  lastUpdate: "",
};

export const podcastsSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    addPodcast: (state, action) => {
      state.podcasts = action.payload;
      console.log("podcasts", action.payload);
    },
    addLastUpdate: (state, action) => {
      state.lastUpdate = action.payload;
    },
  },
});

export const { addPodcast, addLastUpdate } = podcastsSlice.actions;
export default podcastsSlice.reducer;
