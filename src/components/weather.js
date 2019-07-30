import React from 'react';
import moment from 'moment';

const Weather = (props) => {
    const { weather, city, icon,description,sys,wind,coord } = props;        
    return (
        <div id="weather-widget">
            {
                city ?
                    <div className="weather">
                        <h2>Weather in {city}</h2>
                        <h3>
                            <img src={icon} width="50" height="50" />{Math.floor(weather.temp - 273.15)} °C</h3>
                        <h3>
                            <span className="px-4">{Math.floor(weather.temp_min - 273.15)}°C</span>
                            <span className="px-4">{Math.floor(weather.temp_max - 273.15)}°C</span>
                        </h3>
                        <p >{description}</p>
                        <p>{moment().format('dddd, Do MMMM, YYYY')}</p>
                        <table className="table-striped text-center mx-auto">
                            <tbody>
                                <tr >
                                    <td>Wind</td>
                                    <td>
                                        {wind.speed} m/s</td>
                                </tr>                                
                                <tr>
                                    <td>Pressure</td>
                                    <td>{weather.pressure} hpa</td>
                                </tr>
                                <tr>
                                    <td>Humidity</td>
                                    <td>{weather.humidity} %</td>
                                </tr>
                                <tr>
                                    <td>Sunrise</td>
                                    <td>{moment.unix(sys.sunrise).format("h:mm:ss a")} </td>
                                </tr>
                                <tr>
                                    <td>Sunset</td>
                                    <td>{moment.unix(sys.sunset).format("h:mm:ss a")} </td>
                                </tr>
                                <tr>
                                    <td>Geo coords</td>
                                    <td><a style={{color:'white'}} href={`https://openweathermap.org/weathermap?zoom=8&amp;lat=${coord.lat}&amp;lon=-${coord.lon}`} target="_blank">[<span id="wrong-data-lat">{coord.lat}</span>,&nbsp;<span id="wrong-data-lon">{coord.lon}</span>]</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    : null
            }


        </div>
    );
};


export default Weather;