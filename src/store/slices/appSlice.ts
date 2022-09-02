import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../types";
import { fetchData } from "../fetchData";
import { RootState } from "../store";

const initialState: AppState = {
  loading: false,
  error: false,
  data: null,
};

export const fetchDataAsync = createAsyncThunk("fetchData", async () => {
  const response = await fetchData();
  return response;
});

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    init: (state: AppState) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload[0];
        console.log(action);
      })
      .addCase(fetchDataAsync.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { init } = appSlice.actions;

export const isAppLoading = (state: RootState) => state.app.loading;
export const hasAppError = (state: RootState) => state.app.error;

// TODO(dbuddha): Move it to it own slicer.
export const productInfo = (state: RootState) => {
  if (!state.app.data) {
    return null;
  }
  const { title, subtitle, image, tags } = state.app.data;
  return { title, subtitle, image, tags };
};
export const getSales = (state: RootState) => state.app.data?.sales;

export default appSlice.reducer;
