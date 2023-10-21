// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getAllHotels, getAllHotelsByCity } from "../api/hotelsApi";

// export const fetchAllHotels = createAsyncThunk(
//   "hotel/fetchAllHotels",
//   async (_, { rejectWithValue }) => {
//     try {
//       const request = await getAllHotels();
//       console.log(request);
//       const response = await request;
//       //   if (request.status !== 200) return rejectWithValue(response);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const fetchAllHotelsByCity = createAsyncThunk(
//   "hotel/fetchAllHotelsByCity",
//   async (city, { rejectWithValue }) => {
//     try {
//       const request = await getAllHotelsByCity(city);
//       console.log(request);
//       const response = await request;
//       //   if (request.status !== 200) return rejectWithValue(response);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// const hotelSlice = createSlice({
//   name: "hotel",
//   initialState: {
//     loading: false,
//     hotel: null,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllHotels.pending, (state) => {
//         state.loading = true;
//         state.hotel = null;
//         state.error = null;
//       })
//       .addCase(fetchAllHotels.fulfilled, (state, action) => {
//         state.loading = false;
//         state.hotel = action.payload;
//         state.error = null;
//       })
//       .addCase(fetchAllHotels.rejected, (state, action) => {
//         state.loading = false;
//         state.hotel = null;
//         state.error = action.payload.message;
//       })
//       .addCase(fetchAllHotelsByCity.pending, (state) => {
//         state.loading = true;
//         state.hotel = null;
//         state.error = null;
//       })
//       .addCase(fetchAllHotelsByCity.fulfilled, (state, action) => {
//         state.loading = false;
//         state.hotel = action.payload;
//         state.error = null;
//       })
//       .addCase(fetchAllHotelsByCity.rejected, (state, action) => {
//         state.loading = false;
//         state.hotel = null;
//         state.error = action.payload.message;
//       });
//   },
// });

// export default hotelSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchImg } from "../api/searchApi";

export const imageSearch = createAsyncThunk(
  "image/imageSearch",
  async (value, { rejectWithValue }) => {
    try {
      const response = await searchImg(value);
      console.log("response", response);
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
