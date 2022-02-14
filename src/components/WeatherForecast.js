import React from "react";
import Card from "../UI/Card/Card";

import classes from "./WeatherForecast.module.css";

const WeatherForecast = (props) => {
  return(
    <Card className={classes.forecast}>
      <h1>Weather Forecast: {props.data.location}</h1>
      <p>Temperature: {props.data.temp}</p>
      <p>Max temperature: {props.data.maxTemp}</p>
      <p>Min temperature: {props.data.minTemp}</p>

    </Card>
  );
}

export default WeatherForecast;