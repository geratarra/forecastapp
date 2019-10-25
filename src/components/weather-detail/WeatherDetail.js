import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { getDayOfWeek } from '../../utils';

import { API_KEY, API_URI, UNITS } from '../../config';

import style from './WeatherDetail.module.css';

const axios = require('axios');
const FORECAST_URL = API_URI + '/forecast?appid=' + API_KEY;

const WeatherDetail = (props) => {

    let wDetail;
    if (props.history.action === "POP" || !props.wDetail) {
        wDetail = {};
    } else {
        wDetail = props.wDetail;
    }
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
        return <h3 className="white-center-text">Loading...</h3>
    } else if (forecastDetail === null) {
        return <h3>Error!</h3>
    }
    
    const currentDay = props.location.pathname.slice(1);
    let dayOfWeek = wDetail.dayOfWeek,
        flag = false;
    const dailyForecast = forecastDetail.filter(item => {
        const auxCurrentDay = new Date(item.dt_txt);
        if (currentDay === auxCurrentDay.toDateString().slice(0, 3).toLowerCase()) {
            if (!flag && !dayOfWeek) {
                dayOfWeek = getDayOfWeek(auxCurrentDay);
                flag = true;
            }
            return true;
        }
        return false;
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
    return (
        <div>
            <span className={style.title}>{ dayOfWeek }</span>
            <div>
                {renderLineChart}
                <div className={style.averageStatus}>
                    {wDetail.pressure ? <p><span>Pressure:&nbsp;</span><span>{wDetail.pressure}&nbsp;hPa</span></p> : null}
                    {wDetail.humidity ? <p><span>Humidity:&nbsp;</span><span>{wDetail.humidity}%</span></p> : null}
                    {wDetail.speed ? <p><span>Speed:&nbsp;</span><span>{wDetail.speed}&nbsp;meter/sec</span></p> : null}
                </div>
            </div>
        </div>
    );
};

export default WeatherDetail;