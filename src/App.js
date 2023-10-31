import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { CurrentWeatherPage } from './views/CurrentWeatherPage/CurrentWeatherPage';
import { WeeklyForecastPage } from './views/WeeklyForecastPage/WeeklyForecastPage';

function App() {
  return (
    <div style={{backgroundColor: 'light-blue', width: '60%', borderRadius: '20px', padding: '10px 30px', margin: '2rem auto', minHeight: '40rem'}}>
<Routes>
<Route path='/' element={<Header/>} >
  <Route index element={<CurrentWeatherPage/>}/>
  <Route path='weekly' element={<WeeklyForecastPage/>}/>
  </Route>
</Routes>
    </div>
  );
}

export default App;
