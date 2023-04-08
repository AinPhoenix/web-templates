import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SampleState {
  value: number;
}

const initialState: SampleState = {
  value: 0,
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    sampleMethod: (state, action: PayloadAction<number>) => {
      state.value = 0;
    },
  },
});

export const { sampleMethod } = sampleSlice.actions;

export default sampleSlice.reducer;
