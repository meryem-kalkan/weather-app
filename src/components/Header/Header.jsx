import { Outlet } from "react-router-dom";
import './Header.css';

export const Header = () => {
    const units = 0;
    const time = new Date().toLocaleTimeString('default', {timeStyle: 'short',  hour12: false });
    const weekday = new Date().toLocaleString(
        'default', {weekday: 'long'}
      );

    return (
        <div className="header-container">
        <div className="header">
        <h2>Skyly</h2>
        <input type="search"/>
        <p>{weekday}  {time}</p>
        {units ? 'f' : '°C'}
        </div>
        <Outlet/>
        </div>
    )
}