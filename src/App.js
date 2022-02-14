import React, { useState } from "react";

import WeatherForm from "./components/WeatherForm";
// import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [isWeatherLoaded, setIsWeatherLoaded] = useState(false);

  const weatherRequest = (city) => {
    console.log("requested city: ", city);
  }

  return (
    <React.Fragment>
      <WeatherForm onWeatherRequest={weatherRequest} />
      {/* {isWeatherLoaded && <WeatherForecast />} */}
    </React.Fragment>
  );
}

export default App;
