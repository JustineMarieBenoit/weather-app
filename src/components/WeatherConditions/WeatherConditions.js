import React from 'react'
import './WeatherConditions.css'

const WeatherConditions = props => {
    return (
        <div className="weather-conditions">
            {props.error && (
                <div className="error">
                    <h2>Oops!</h2>
                    <span
                        role="img"
                        className="error-emoji"
                        aria-label="oops"
                    >
                        &#128563;
                        </span>
                    <h4>No results found. Let's try another city.</h4>
                </div>
            )}
            {props.loading && (
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            )}
            {props.forecast.cod === 200 ?
                (
                <div className="weather-result">
                    <h2>{props.forecast.name}</h2>
                    <img src={`http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`.trim()}
                    alt={props.forecast.weather[0].description}
                    />
                    <h4>It is currently {Math.round(props.forecast.main.temp)} degrees out with {props.forecast.weather[0].description}.</h4>
                </div>
                )
                : null
            }
        </div>
    )
}
export default WeatherConditions