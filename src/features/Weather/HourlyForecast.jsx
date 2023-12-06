import { getIcon } from '../../utils/getIcons';

export const HourlyForecast = ({forecast, units}) => {

const getTime = (dt) => {
 return new Date(dt * 1000).toLocaleTimeString('default', {timeStyle: 'short',  hour12: false });
};

const renderForecast = forecast.list.map((forecast, id) => {
const options = { day: 'numeric', month: 'short', weekday: 'short' };
 const date = new Date(forecast.dt *1000).toLocaleDateString('en', options)

    return  (
    <div key={id} className="forecast-items-container">
      <p>{date}</p>
      <p>{getTime(forecast.dt)}</p>
      <p>{forecast.main.temp.toFixed()}{units === 'metric' ? '°C' : '°F'}</p>
     <img src={getIcon(forecast.weather[0].icon)} alt={forecast.weather[0].description} />
    </div>
    )
});


       return (
         <div className="forecast-container">
           {renderForecast}
         </div>
       )
}