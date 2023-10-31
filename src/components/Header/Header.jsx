import { Outlet } from "react-router-dom";

export const Header = () => {
    const units = 0;
    return (
        <div>
        <div>
        <h1>Skyly</h1>
        <input type="search"/>
        <p>Monday 14:34</p>
        {units ? 'f' : 'c'}
        </div>
        <Outlet/>
        </div>
    )
}