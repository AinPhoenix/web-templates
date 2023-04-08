import { configureStore } from "@reduxjs/toolkit";
import SampleSlice from "./Slices/SampleSlice";

export const store = configureStore({
  reducer: {
    sample: SampleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
