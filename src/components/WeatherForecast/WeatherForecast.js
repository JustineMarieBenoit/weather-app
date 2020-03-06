import React, { useState } from 'react'
import WeatherConditions from '../WeatherConditions/WeatherConditions'
import WeatherGraphics from '../WeatherGraphics/WeatherGraphics'
import './WeatherForecast.css'


const WeatherForecast = () => {
    let [city, setCity] = useState('')
    let [forecast, setForecast] = useState({})
    let [unit, setUnit] = useState('imperial')
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city)

    function getForecast(e) {
        e.preventDefault()

        if (city.length === 0) {
            return setError(true)
        }

        setError(false)
        setForecast({})
        setLoading(true)

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "d9cb56b47fmsh7c0659317c13d37p1db628jsn2f72e66714c8"
            }
        })
            .then(forecast => forecast.json())
            .then(forecast => {
                if (forecast.cod !== 200) {
                    throw new Error()
                }
                setForecast(forecast)
                setLoading(false)
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            })
    }
    return (
        <div className="weather-forecast">
            <h2>What's The Weather Like?</h2>
            <WeatherGraphics />
            <form onSubmit={getForecast}>
                <div className="form-input">
                    <input
                        type="text"
                        placeholder="Enter City"
                        maxLength="50"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="form-radio">
                    <label className="radio-btn">
                    Fahrenheit
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "imperial"}
                            value="imperial"
                            onChange={(e) => setUnit(e.target.value).trim()}
                        />
                        <span className="checkmark"></span>
                </label>
                    <label className="radio-btn">
                    Celcius
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "metric"}
                            value="metric"
                            onChange={(e) => setUnit(e.target.value)}
                        />
                        <span className="checkmark"></span>
                </label>
                </div>
                <div className="form-btn">
                    <button type="submit">Let's Find Out!</button>
                </div>
            </form>
            <WeatherConditions
                forecast={forecast}
                error={error}
                loading={loading}
            />
        </div>
    )
}
export default WeatherForecast;
