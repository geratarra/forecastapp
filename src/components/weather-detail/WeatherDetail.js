import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import { API_KEY, API_URI, UNITS } from '../../config';

import style from './WeatherDetail.module.css';

const axios = require('axios');
const FORECAST_URL = API_URI + '/forecast?appid=' + API_KEY;

const WeatherDetail = (props) => {

    const [forecastDetail, setForecastDetail] = useState(undefined);
    if (!forecastDetail) {

        axios.get(FORECAST_URL, {
            params: {
                lat: props.position.coords.latitude,
                lon: props.position.coords.longitude,
                units: UNITS
            }
        })
        .then(response => {
            setForecastDetail(response.data.list);
        })
        .catch(error => {
            setForecastDetail(null);
            console.log('Error while trying to get the forecast:');
            console.log(error);
        });
    }

    if (forecastDetail === undefined) {
        return <h3 className="loading">Loading...</h3>
    } else if (forecastDetail === null) {
        return <h3>Error!</h3>
    }
    
    const currentDay = props.location.pathname.slice(1);
    const dailyForecast = forecastDetail.filter(item => {
        const auxCurrentDay = new Date(item.dt*1000);
        return currentDay === auxCurrentDay.toDateString().slice(0, 3).toLowerCase();
    });

    dailyForecast.map(item => item.x_label = new Date(item.dt_txt).toTimeString().slice(0, 5));

    const renderLineChart = (
        <LineChart width={700} height={400} data={dailyForecast} className={style.customChartWrapper}>
            <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="x_label" dy={10} angle={-35} tick={{ fill:'white', fontSize: 12 }} />
            <YAxis tickFormatter={(label) => `${label}°`} dx={-10} tick={{ fill:'white', fontSize: 14 }} />
        </LineChart>
    );

    console.log(props);
    
    
    return (
        <div>
            <span className={style.title}>{props.location.state.dayOfWeek}</span>
            <div>
                {renderLineChart}
                <div className={style.averageStatus}>
                    <p><span>Pressure:&nbsp;</span><span>{props.location.state.pressure}&nbsp;hPa</span></p>
                    <p><span>Humidity:&nbsp;</span><span>{props.location.state.humidity}%</span></p>
                    <p><span>Speed:&nbsp;</span><span>{props.location.state.speed}&nbsp;meter/sec</span></p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetail;