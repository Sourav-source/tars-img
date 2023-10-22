import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchImg } from "../api/searchApi";

export const imageSearch = createAsyncThunk(
  "image/imageSearch",
  async (value, { rejectWithValue }) => {
    try {
      const response = await searchImg(value);
      if (response.status !== 200) rejectWithValue(response);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const imageSlice = createSlice({
  name: "image",
  initialState: { loading: false, image: null, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(imageSearch.pending, (state) => {
          state.loading = true;
          state.image = null;
          state.error = null;
      })
      .addCase(imageSearch.fulfilled, (state, action) => {
          state.loading = false;
          state.image = action.payload;
          state.error = null;
      })
      .addCase(imageSearch.rejected, (state, action) => {
        state.loading = false;
        state.image = null;
        state.error = action.payload.message;
      });
  },
});

export default imageSlice.reducer;
