import { Outlet } from "react-router-dom";
import './Header.css';

export const Header = () => {
    const units = 0;
    return (
        <div className="header-container">
        <div className="header">
        <h2>Skyly</h2>
        <input type="search"/>
        <p>Monday 14:34</p>
        {units ? 'f' : '°C'}
        </div>
        <Outlet/>
        </div>
    )
}