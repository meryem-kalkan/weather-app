import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk('weather/fetchWeatherData', async(obj) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.lon}&appid=${process.env.REACT_APP_KEY}&units=${obj.units}`);
    const jsonResponse = await response.json();
    return jsonResponse;
});

export const fetchForecastData = createAsyncThunk('weather/fetchForecastData', async(obj) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${obj.lat}&lon=${obj.lon}&appid=${process.env.REACT_APP_KEY}&units=${obj.units}`);
    const jsonResponse = await response.json();
    return jsonResponse;
});

const initialState = {
    units: 'metric',
    loading: false,
    weather: {},
    forecast: {},
    errors: []
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {
        toggleUnits: (state) => {
            state.units = (state.units === 'metric') ? 'imperial' : 'metric';
        },
        clearErrors: (state) => {
            state.errors = [];
          }
    },
    extraReducers: builder => {
        // Weather
        builder
        .addCase(fetchWeatherData.pending, state => {
            state.loading = true;
        })
        .addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.loading = false;
            state.errors = [];
            state.weather = action.payload;
        })
        .addCase(fetchWeatherData.rejected, (state, action) => {
            state.loading = false;
            state.weather = [];
            state.errors.push(action.error);
        });

        // Forecast
        builder
        .addCase(fetchForecastData.pending, state => {
            state.loading = true;
        })
        .addCase(fetchForecastData.fulfilled, (state, action) => {
            state.loading = false;
            state.errors = [];
            state.forecast = action.payload;
        })
        .addCase(fetchForecastData.rejected, (state, action) => {
            state.loading = false;
            state.forecast = [];
            state.errors.push(action.error);
        });
    }
})

export default weatherSlice.reducer;

export const { toggleUnits } = weatherSlice.actions;
export const { clearErrors } = weatherSlice.actions;

export const selectUnits = state => state.weather.units;
export const selectWeather = state => state.weather.weather;
export const selectForecast = state => state.weather.forecast;
export const selectLoading = state => state.weather.loading;
export const selectErrors = state => state.weather.errors;