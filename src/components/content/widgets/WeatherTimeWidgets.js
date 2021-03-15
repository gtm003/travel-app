import React from "react";
import { useFetch } from "react-async";
import './WeatherTimeWidgets.scss'

const WeatherTimeWidgets = ({city}) => {

  const appID = '8e1eecd6fc68b8490908497ecf8ca301';
  const exchangeAppId = '5da0f6a8b205454b88f719014c7bbd87';

  const { data, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${appID}&units=metric`, {
    headers: { accept: "application/json" },
  });
  if (error) return error.message;

  function ClockTimeZone(timezone) {
    let TimezoneOffset = timezone/3600;
    let localTime = new Date();
    let ms = localTime.getTime() + (localTime.getTimezoneOffset() * 60000) + TimezoneOffset * 3600000;
    let time = new Date(ms);
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let temp = "" + ((hour < 10) ? "0" : "") + hour;
    temp += ((minute < 10) ? ":0" : ":") + minute;
    return temp;
  }

  console.log(data)
  return (
    <div className='widgets'>
      { data &&
        <div className='widgets-container'>
          <div className='widget-container'>
            <span>{city}: </span>
            <span>{Math.round(data.main.temp)} °C</span>
          </div>
          <div className='widget-container'>
            <span>Time: {ClockTimeZone(data.timezone)}</span>
          </div>
        </div>
        }
    </div>
  );
};

export default WeatherTimeWidgets;
