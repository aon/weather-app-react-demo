import React, { useRef } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import classes from "./WeatherForm.module.css";

const WeatherForm = (props) => {
  const enteredCityRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onWeatherRequest(enteredCityRef.current.value);
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={formSubmitHandler}>
        <Input ref={enteredCityRef} type="text" label="City" />
        <div className={classes.actions}>
          <Button type="submit">Find weather</Button>
        </div>
      </form>
    </Card>
  );
};

export default WeatherForm;
