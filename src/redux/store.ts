import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";
import podcastsReducer from "./podcastsSlice";
import podcastSelectedReducer from "./podcastSelectedSlice";

export const store = configureStore({
  reducer: {
    isLoading: loaderReducer,
    podcasts: podcastsReducer,
    podcastSelected: podcastSelectedReducer,
  },
});

// Suscripción para detectar cambios en el estado
store.subscribe(() => {
  // Almacena el estado actualizado en el localStorage
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
