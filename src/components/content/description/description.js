import React, { useContext } from 'react';
import Context from '../../../context';
import WeatherTimeWidgets from '../widgets/WeatherTimeWidgets';
import './description.scss';

export default function Description(props) {
  const index = props.indexLang;
  //const {selectCountry} = useContext(Context)
  return (
    <div className='description'>
      <WeatherTimeWidgets city={props.country.localizations[0].capital} currency={props.country.currency} indexLang={props.indexLang} 
      cityText={props.country.localizations[props.indexLang].capital}/>
      <div className='avatar'>
        <img src={props.country.imageUrl} alt={props.country.imageUrl}></img>
      </div>
      <h1>{props.country.localizations[index].name}</h1>
      <h2>{props.country.localizations[index].capital}</h2>
      <p>{props.country.localizations[index].description}</p>
    </div>
  )
}