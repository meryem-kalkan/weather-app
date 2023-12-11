import { useSelector, useDispatch } from "react-redux";
import { selectSelectedLocation } from "../src/features/GeoCode/GeoCodeSlice";
import { useEffect } from "react";
import { fetchWeatherData, fetchForecastData, selectWeather, selectForecast, selectUnits, selectLoading, selectErrors, clearErrors } from "../src/features/Weather/WeatherSlice";
import { CurrentWeather } from "../src/features/Weather/CurrentWeather";
import { HourlyForecast } from "../src/features/Weather/HourlyForecast";
import { Header } from "./features/Header/Header";
import gif from './icons/circle-1700_128.gif';
import erricon from './icons/error-outline.svg';
import defaulticon from './icons/weather-cloudy-to-sunny-256.png';
import './App.css'

function App() {
const location = useSelector(selectSelectedLocation);
const weather = useSelector(selectWeather);
const forecast = useSelector(selectForecast);
const units = useSelector(selectUnits);
const loading = useSelector(selectLoading);
const error = useSelector(selectErrors);
const { lat, lon } = location;
const dispatch = useDispatch();

useEffect(() => {
  if (lat && lon) {
  dispatch(fetchWeatherData({lat, lon, units}));
  dispatch(fetchForecastData({lat, lon, units}));
  }
}, [dispatch, units, lat, lon]);

const cleanErrors = () => {
dispatch(clearErrors())
};

const renderBody = () => {
  if (loading) {
  return (
    <div className="loading-error">
      <img src={gif} alt="loading gif"/>
      <p>Loading</p>
    </div>
  )
  }
  if (!loading && error.length > 0) {
    return (
    <div className="loading-error">
      <img src={erricon} alt="error icon"/>
      <p>Error: {error}</p>
      <p onClick={cleanErrors}>close x</p>
    </div> 
    )
    } 

  if (Object.keys(weather).length > 0 && Object.keys(forecast).length > 0) {
    return (
    <>
     <CurrentWeather weather={weather} units={units} location={location}/>
     <HourlyForecast forecast={forecast} units={units}/>
    </>
    )
    } else {
      return (
        <div className="default">
         <img src={defaulticon} alt="cloudy sunny weather icon"/>
        <p>Explore current weather data and 5-day forecast of more than 200,000 cities!</p>
        </div>
      );
    }
    
};

    return (
      <div className="app-container">
      <Header/>
        <div className="main">
            {renderBody()}
        </div>
        </div>
    )
}

export default App;
