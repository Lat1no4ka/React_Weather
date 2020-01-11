import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            weatherData: null,
        };

    }

    componentDidMount() {
        const name = this.props.name;
        
        console.log('componentDidMount');
        const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            name +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ weatherData: json });
        })
    }
    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        console.log('weatherData = ', weatherData.message)
    if (weatherData.cod !== 200) return <div> {weatherData.message}</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div>
                <h1>
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description} />
                </h1>
                <p>Current: {Math.trunc((weatherData.main.temp - 32) * (5 / 9))}°</p>
                <p>High: {Math.trunc((weatherData.main.temp_max - 32) * (5 / 9))}°</p>
                <p>Low: {Math.trunc((weatherData.main.temp_min - 32) * (5 / 9))}°</p>
                <p>Wind Speed: {(weatherData.wind.speed / 2.23).toFixed(1)} m/s</p>
            </div>
        );
    }
}
export { Weather };