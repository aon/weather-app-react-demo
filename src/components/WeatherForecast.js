import React from "react";
import Card from "../UI/Card/Card";

import classes from "./WeatherForecast.module.css";

const WeatherForecast = (props) => {
  const temp = Math.round(props.data.temp);
  const maxTemp = Math.round(props.data.maxTemp);
  const minTemp = Math.round(props.data.minTemp);
  const wind = Math.round(props.data.wind);

  const iconUrl = `http://openweathermap.org/img/wn/${props.data.iconCode}@2x.png`;

  return (
    <Card className={classes.card}>
      <h1 className={classes.title}>{props.data.location}</h1>
      <div className={classes.forecast}>
        <div className={classes.left}>
          <img src={iconUrl} alt="Weather icon" />
          <div className={classes["left-temp"]}>
            <p className={classes["left-temp-main"]}>{temp}°C</p>
            <p className={classes["left-temp-secondary"]}>
              {maxTemp} | {minTemp}
            </p>
          </div>
        </div>
        <div className={classes.right}>
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind: {wind} km/h</p>
        </div>
      </div>
    </Card>
  );
};

export default WeatherForecast;
