import React, { useState, useEffect } from "react";

import Card from "./UI/Card/Card";
import WeatherForm from "./components/WeatherForm";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);
  const [isWeatherReady, setIsWeatherReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Weather App Demo"
  })

  const fetchWeatherHandler = async (location) => {
    setIsWeatherLoading(true);
    setIsWeatherReady(false);
    setError(null);


    try {
      const parsedLocation = location.trim();
      const apiKey = "151a0df683d4d42b733d682a64c8658e";
      const units = "metric"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${parsedLocation}&appid=${apiKey}&units=${units}`
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setWeatherData({
        location: data.name,
        temp: data.main.temp,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        iconCode: data.weather[0].icon
      })

      setIsWeatherReady(true);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setIsWeatherLoading(false);
  };

  return (
    <React.Fragment>
      <WeatherForm onWeatherRequest={fetchWeatherHandler} />
      {!error && <WeatherForecast data={weatherData} isLoading={isWeatherLoading} isReady={isWeatherReady}/>}
      {error && <p>{error.message}</p>}
    </React.Fragment>
  );
}

export default App;
