import React, { useRef } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./WeatherForm.module.css";

const WeatherForm = (props) => {
  const enteredLocationRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onWeatherRequest(enteredLocationRef.current.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="location">Location</label>
        <input id="location" type="text" ref={enteredLocationRef} />
        <Button type="submit">Find weather</Button>
      </form>
    </Card>
  );
};

export default WeatherForm;
