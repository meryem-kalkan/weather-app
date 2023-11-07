import { Link } from "react-router-dom";
import barometer from './wi_barometer.svg'
import thermometer from './wi_thermometer.svg'
import wind from './wi_wind.svg'
import humidity from './wi_humidity.svg'
import arrow from './right-arrow.png'

export const CurrentWeatherPage = () => {
    return (
        <div className="main">
            <div className='banner'>
                <div>
              <h1>Baku, Azerbaijan</h1> 
              <p>9°C</p>
              </div>
              
            </div>
            <div className="weather-info-container">
            <div className="parameters-container">
                <div>
                <p>Real Feel</p>
                <h3>12°C</h3>
                </div>
                <img src={thermometer} alt="" />
              </div>
              <div className="parameters-container">
                <div>
                <p>Wind Speed</p>
                <h3>12 km/h</h3>
                </div>
                <img src={wind} alt="" />
              </div>
              <div className="parameters-container">
                <div>
                <p>Humidity</p>
                <h3>50%</h3>
                </div>
                <img src={humidity} alt="" />
              </div>
              <div className="parameters-container">
                <div>
                <p>Pressure</p>
                <h3>706mm</h3>
                </div>
                <img src={barometer} alt="" />
              </div>
            </div>
            <div className="weather-info-container2">
              <div>
                
                <p>11°C</p>
                <p>11:00</p>
              </div>
              <div>
                
                <p>11°C</p>
                <p>12:00</p>
              </div>
              <div className="">
                
                <p>11°C</p>
                <p>13:00</p>
              </div>
              <div>
              
                <p>11°C</p>
                <p>14:00</p>
              </div>
              <div>
              
                <p>11°C</p>
                <p>15:00</p>
              </div>
              <div>
              
                <p>11°C</p>
                <p>16:00</p>
              </div>
              <div>
              
                <p>11°C</p>
                <p>17:00</p>
              </div>
            </div>
            <Link className="button" to='weekly'><p>Weekly Forecast</p><img src={arrow} alt="arrow" /></Link>
        </div>
    )
}