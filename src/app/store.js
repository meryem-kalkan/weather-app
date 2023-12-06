import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/Weather/WeatherSlice';
import geoCodeReducer from '../features/GeoCode/GeoCodeSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    geoCode: geoCodeReducer
  },
});

