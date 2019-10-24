import React from 'react';
import { useHistory } from "react-router";
import { useStoreActions } from 'easy-peasy';
import { getDayOfWeek } from '../../utils';

import style from './WeatherCard.module.css';

const WeatherCard = (props) => {
    let history = useHistory();
    const date = new Date(props.props.date*1000);
    const day = getDayOfWeek(date);
    const dateLabel = day.slice(0, 3);
    const unitsSymbol = props.props.units === 'metric' ? 'C°' : 'F°';
    const selectDay = useStoreActions(actions => actions.selectedDay.select);

    const clickedOnCard = (day) => {
        const path = '/' + day.slice(0, 3).toLowerCase();
        selectDay({ dayOfWeek: day, humidity: props.props.humidity, pressure: props.props.pressure, speed: props.props.speed });
        history.push(path);
    };

    return (
        <div className={style.container} onClick={() => clickedOnCard(day)}>
            <h4 className={style.header}>{dateLabel}</h4>
            <img src={'http://openweathermap.org/img/wn/' + props.props.weather.icon + '@2x.png'} alt={props.props.weather.description + ' icon'}/>
            <div>
                <p>
                    <span>Min:&nbsp;</span>
                    <span>{Math.round(props.props.min)} {unitsSymbol}</span>
                </p>
                <p>
                    <span>Max:&nbsp;</span>
                    <span>{Math.round(props.props.max)} {unitsSymbol}</span>
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;