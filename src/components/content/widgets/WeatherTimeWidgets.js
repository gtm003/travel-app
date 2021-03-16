import React from "react";
import { useFetch } from "react-async";
import './WeatherTimeWidgets.scss'
import ExchangeWidget from "./ExchangeWidget";
import {ClockTimeZone} from "./utilities";
const langArr = ['en', 'ru', 'be'];

const WeatherTimeWidgets = ({city, currency, indexLang}) => {
  const dateTest = new Date();
  const locales = langArr[indexLang];
  const optionsDate = { 
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  const appID = '8e1eecd6fc68b8490908497ecf8ca301';

  const { data, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${appID}&units=metric`, {
    headers: { accept: "application/json" },
  });
  if (error) return error.message;

  if (!data) {
    return '';
  }

  let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  return (
    <div className='widgets'>
        <div className='widgets-container'>
          <div className='widget-container'>
            <span className='city-name'>{city}: </span>
            <span>{Math.round(data.main.temp)} °C</span>
            <img className='weather-icon' src={icon}/>
          </div>
          <div className='widget-container'>
            <span>{ClockTimeZone(data.timezone)}</span>
          </div>
          <div className='widget-container'>
            <span>{dateTest.toLocaleString(locales, optionsDate)}</span><br></br>
            <span>а тут время</span>
          </div>
          <ExchangeWidget currency={currency}/>
        </div>
    </div>
  );
};

export default WeatherTimeWidgets;
