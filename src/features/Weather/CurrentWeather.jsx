import barometer from '../../icons/wi_barometer.svg'
import thermometer from '../../icons/wi_thermometer.svg'
import wind from '../../icons/wi_wind.svg'
import humidity from '../../icons/wi_humidity.svg'
import { getIcon } from '../../utils/getIcons'

export const CurrentWeather = ({weather, units, location}) => {
    return (
        <>
        <div className='banner'>
        <div>
          <h1>{location.name ? location.name : weather.name}, <strong>{weather.sys.country}</strong></h1>
         {units === 'metric' ? <p>{weather.main.temp.toFixed()}°C</p> : <p>{weather.main.temp.toFixed()}°F</p>}
        </div>
        <div className='image-text-container'>
          <img src={getIcon(weather.weather[0].icon)} alt={weather.weather[0].description}/>
          <p>{weather.weather[0].description}</p>
        </div>
        </div>
    <div className="weather-info-container">
    <div className="parameters-container">
        <div>
        <p>Real Feel</p>
        <h3>{weather.main.feels_like.toFixed()}{units === 'metric' ? '°C' : '°F'}</h3>
        </div>
        <img src={thermometer} alt="thermometer" />
      </div>
      <div className="parameters-container">
        <div>
        <p>Wind Speed</p>
        <h3>{weather.wind.speed} {units === 'metric' ? 'm/s' : 'mph'}</h3>
        </div>
        <img src={wind} alt="wind" />
      </div>
      <div className="parameters-container">
        <div>
        <p>Humidity</p>
        <h3>{weather.main.humidity}%</h3>
        </div>
        <img src={humidity} alt="humidity" />
      </div>
      <div className="parameters-container">
        <div>
        <p>Pressure</p>
        <h3>{weather.main.pressure} hPa</h3>
        </div>
        <img src={barometer} alt="barometer" />
      </div>
    </div>
    </>
    )
}