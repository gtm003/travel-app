import React from "react";
import { useFetch } from "react-async";
import './ExchangeWidget.scss'


const ExchangeWidget = ({currency}) => {

  const exchangeAppId = '5da0f6a8b205454b88f719014c7bbd87';

  const { data, error } = useFetch(`https://openexchangerates.org/api/latest.json?app_id=${exchangeAppId}`, {
    headers: { accept: "application/json" },
  });
  if (error) return error.message;

  if (!data) {
    return '';
  }

  return (
    <div className='widget-container'>
      <div>
        { (currency !== 'USD') &&
          <div className='currency-container'>
            {currency} = {(1 / (data.rates[currency])).toFixed(3)} USD;
          </div>
        }
        {(currency !== 'EUR') &&
          <div className='currency-container'>
          {currency} = {(data.rates['EUR'] / (data.rates[currency])).toFixed(3)} EUR;
          </div>
        }
        {(currency !== 'BYN') &&
        <div className='currency-container'>
          {currency} = {(data.rates['BYN'] / (data.rates[currency])).toFixed(3)} BYN;
        </div>
        }
      </div>
    </div>
  );
};

export default ExchangeWidget;
