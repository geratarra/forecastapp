import React from 'react';

import WeatherCard from '../weather-card/WeatherCard';
import style from './Forecast.module.css';

import { UNITS } from '../../config';

function Forecast(props) {
    const forecast = props.forecast;

    function renderForecast() {
        const cards = [];
        forecast.forEach((item, index) => {
            const _props = {
                max: item.temp.max,
                min: item.temp.min,
                date: item.dt,
                weather: item.weather[0],
                units: UNITS,
                pressure: item.pressure,
                humidity: item.humidity,
                speed: item.speed
            };
            cards.push(
                <WeatherCard props={_props} key={index}></WeatherCard>
            );
        });
        return cards;
    }

    return (
        <div className={style.forecast}>
            <p>FORECAST</p>
            {renderForecast()}
        </div>
    );
}

export default Forecast;
