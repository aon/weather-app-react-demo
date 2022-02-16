import React, { useState, useEffect } from "react";

import Card from "./UI/Card/Card";
import WeatherForm from "./components/WeatherForm";
import WeatherForecast from "./components/WeatherForecast";
import classes from "./App.module.css";

function App() {
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);
  const [isWeatherReady, setIsWeatherReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Weather App Demo";
  });

  const fetchWeatherHandler = async (location) => {
    setIsWeatherLoading(true);
    setIsWeatherReady(false);
    setError(null);

    try {
      const parsedLocation = location.trim();
      const apiKey = "151a0df683d4d42b733d682a64c8658e";
      const units = "metric";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${parsedLocation}&appid=${apiKey}&units=${units}`;
      const response = await fetch(url);

      console.log("Response:", response);

      if (!response.ok) {
        if (response.status === 404)
          throw new Error("Location not found! Check the location name is right and try again.");
        else
          throw new Error("Something went wrong!")
      }

      const data = await response.json();
      console.log("data:",data);

      setWeatherData({
        location: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        iconCode: data.weather[0].icon,
      });

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
      {error && (
        <Card className={classes.error}>
          <p>{error}</p>
        </Card>
      )}
      {isWeatherLoading && (
        <Card>
          <p>Loading...</p>
        </Card>
      )}
      {!error && isWeatherReady && <WeatherForecast data={weatherData} />}
    </React.Fragment>
  );
}

export default App;
