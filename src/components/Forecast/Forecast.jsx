import React from "react";

import "./Forecast.css";

export default function Forecast({ weatherInfo }) {
  const date = dateBuilder(new Date());

  function dateBuilder(d) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const date = [];

    for (let count = 0; count < 5; count++) {
      if (d.getDay() + count < 7) date[count] = d.getDay() + count;
      else if (d.getDay() + count === 7) date[count] = 0;
      else if (d.getDay() + count === 8) date[count] = 1;
      else if (d.getDay() + count === 9) date[count] = 2;
      else if (d.getDay() + count === 10) date[count] = 3;
    }

    
    return [
      days[date[0]],
      days[date[1]],
      days[date[2]],
      days[date[3]],
      days[date[4]]
    ];
  };
  return (
    <div>
      <h1 className="Forecast__title">{date[0]}</h1>
     
      <div className="Forecast__temperature">
        <span className="temperature__max">
          {Math.round(weatherInfo[0].app_max_temp)}
          <sup className="temperature__symbol">°</sup>
        </span>
        <span className="temperature__min">
          {Math.round(weatherInfo[0].app_min_temp)}
          <sup className="temperature__symbol">°</sup>
        </span>
      </div>
    </div>
  );
}
