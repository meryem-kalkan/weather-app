import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGeoCode = createAsyncThunk('geoCode/fetchGeoCode', async(searchValue) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${process.env.REACT_APP_KEY}`);
    const jsonResponse = await response.json();
    return jsonResponse;
})

const initialState = {
    searchValue: '',
    loading: false,
    error: '',
    geoPosition: [],
    selectedLocation: []
}

const geoCodeSlice = createSlice({
    name: 'geoCode',
    initialState: initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setSelectedLocation: (state, action) => {
            state.selectedLocation = action.payload;
        },
        clearGeoPosition: (state) => {
            state.geoPosition = [];
        },
        clearError: (state) => {
            state.error = '';
          }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchGeoCode.pending, state => {
            state.loading = true;
        })
        .addCase(fetchGeoCode.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.geoPosition = action.payload;
        })
        .addCase(fetchGeoCode.rejected, (state, action) => {
            state.loading = false;
            state.geoPosition = [];
            state.error = action.error.message;
        })
    }
})

export default geoCodeSlice.reducer;

export const { setSearchValue, setSelectedLocation, clearGeoPosition, clearError } = geoCodeSlice.actions;

export const selectSearchValue = state => state.geoCode.searchValue;
export const selectGeoPosition = state => state.geoCode.geoPosition;
export const selectSelectedLocation = state => state.geoCode.selectedLocation;
export const selectError = state => state.geoCode.error;
export const selectLoading = state => state.geoCode.loading;