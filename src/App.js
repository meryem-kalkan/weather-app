import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { CurrentWeatherPage } from './views/CurrentWeatherPage/CurrentWeatherPage';
import { WeeklyForecastPage } from './views/WeeklyForecastPage/WeeklyForecastPage';

function App() {
  return (
    <Routes>
<Route path='/' element={<Header/>} >
  <Route index element={<CurrentWeatherPage/>}/>
  <Route path='weekly' element={<WeeklyForecastPage/>}/>
  </Route>
  </Routes>
  );
}

export default App;
