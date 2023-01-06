import { createSlice } from '@reduxjs/toolkit';

const polylineSlice = createSlice({
  name: 'polyline',
  initialState: {
    polylineOptions: null,
    isLoading: false,
  },
  reducers: {
    getPolylineAction: (state) => {
      state.isLoading = true;
    },
    getPolylineSuccess: (state, action) => {
      state.polylineOptions = action.payload;
      state.isLoading = true;
    }
  },
});

export const polylineReducer = polylineSlice.reducer;
export const { getPolylineAction, getPolylineSuccess } = polylineSlice.actions;
