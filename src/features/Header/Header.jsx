import './Header.css';
import { selectUnits, toggleUnits } from "../../features/Weather/WeatherSlice";
import { clearError } from '../../features/GeoCode/GeoCodeSlice';
import { selectSearchValue, selectGeoPosition, setSearchValue, fetchGeoCode, setSelectedLocation, clearGeoPosition, selectError, selectLoading } from "../../features/GeoCode/GeoCodeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const Header = () => {
    const dispatch = useDispatch();
    const units = useSelector(selectUnits);
    const searchValue = useSelector(selectSearchValue);
    const geoPosition = useSelector(selectGeoPosition);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const time = new Date().toLocaleTimeString('default', {timeStyle: 'short',  hour12: false });
    const weekday = new Date().toLocaleString(
        'default', {weekday: 'long'}
      );

    useEffect(() => {
     if (searchValue) {
     dispatch(fetchGeoCode(searchValue));
     }
    }, [dispatch, searchValue]);

    const handleSearchChange = (e) => {
        dispatch(setSearchValue(e.target.value));
      } 
    const changeUnit = () => {
        dispatch(toggleUnits());
    }  

    const setLocation = (location) => {
      dispatch(setSelectedLocation(location));
    }
    const ErrorClean = () => {
        dispatch(clearError());
    }

    const handleBlur = () => {
        setTimeout(() => {
         if (searchValue) {
            dispatch(setSearchValue(''));
        }
        if (geoPosition.length > 0) {
            dispatch(clearGeoPosition());
        }
          }, 200);
    }

    const renderLocationList = () => {
        if (loading) {
            return (
               <ul className="error-loading-box">
                <p>Loading ...</p>
                </ul>
            )
            }
            if (!loading && error) {
                return (
                    <ul className="error-loading-box">
                  <p>Error: {error} </p>
                  <p onClick={ErrorClean}>close x</p>
                    </ul>
                )
                } 
        if (geoPosition.length > 0) {
            return (
                <ul>
                    {geoPosition.map((location, id) => {
          return <li key={id} onClick={() => setLocation(location)}>
            {location.name}, {location.state} <strong>{location.country}</strong>
            </li>
        })}
                </ul>
            )
        }
    }

    return (
        <div className="header">
        <h2>Skyly</h2>
        <div>
        <input placeholder='search for cities' type="search" value={searchValue} onChange={handleSearchChange} onBlur={handleBlur}/>
        {renderLocationList()}
        </div>
        <p>{weekday}  {time}</p>
        <p id="units" onClick={changeUnit}>{units === 'metric' ? '°C': '°F'}</p>
        </div>
    )
}