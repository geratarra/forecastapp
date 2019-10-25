import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import Forecast from './components/forecast/Forecast';
import WeatherDetail from './components/weather-detail/WeatherDetail';
import './App.css';

import { API_KEY, API_URI, UNITS } from './config';

const axios = require('axios');
// const FORECAST_URL = 'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22';
const FORECAST_URL = API_URI + '/forecast/daily?cnt=5&appid=' + API_KEY;

let _position;

function App() {

    const [forecast, setForecast] = useState(undefined);
    if (!_position) {
        navigator.geolocation.getCurrentPosition(function (position) {
            _position = position;
            axios.get(FORECAST_URL, {
                params: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    units: UNITS
                }
            })
                // axios.get(FORECAST_URL)
                .then(response => {
                    setForecast(response.data.list);
                })
                .catch(error => {
                    setForecast(null);
                    console.log('Error while trying to get the forecast:');
                    console.log(error);
                }, function (err) {
                    setForecast(null);
                    console.log('Error while trying to get the current position:');
                    console.log(err);
                });
        });
    }

    if (forecast === undefined) {
        return <h3 className="white-center-text">Loading...</h3>
    } else if (forecast === null) {
        return <h3 className="white-center-text">Error!</h3>
    }

    let wDetail;
    let setWeatherDetail = (detail) => wDetail = detail;

    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Switch>
                        <Route exact path="/" render={(props) => <Forecast {...props} setWeatherDetail={setWeatherDetail} forecast={forecast} />} />
                        <Route path="/sun" render={(props) => <WeatherDetail {...props} wDetail={wDetail} position={_position} />} />
                        <Route path="/mon" render={(props) => <WeatherDetail {...props} wDetail={wDetail} position={_position} />} />
                        <Route path="/tue" render={(props) => <WeatherDetail {...props} wDetail={wDetail} position={_position} />} />
                        <Route path="/wed" render={(props) => <WeatherDetail {...props} wDetail={wDetail} position={_position} />} />
                        <Route path="/thu" render={(props) => <WeatherDetail {...props} wDetail={wDetail} position={_position} />} />
                        <Route path="/fri" render={(props) => <WeatherDetail {...props} wDetail={wDetail} position={_position} />} />
                        <Route path="/sat" render={(props) => <WeatherDetail {...props} wDetail={wDetail} position={_position} />} />
                        <Route component={() => <h3 className="white-center-text">Page not found :(</h3>} />
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
