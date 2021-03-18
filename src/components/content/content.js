import React, { useContext } from 'react';
import './Content.scss';
import countries from '../../constants/country.json';
import Description from './description/description';
import Gallery, { GalleryNew } from './gallery/gallery';
import VideoPlayer from './video/video';
import {Map} from './map/map';
import WeatherTimeWidgets from "./widgets/WeatherTimeWidgets";
import {useState, useEffect} from "react";


export default function Content(props) {
  const [country, setCountry] = useState(props.country);

  useEffect(() => {
    if(JSON.stringify(countries[props.indexCountry]) !== country) {
      setCountry(countries[props.indexCountry]);
    }

    console.log(country);
  }, [country]);

  return (
    <React.Fragment>
    {country && (
        <div className = 'content-country'>
          <div className = 'wrapper1'>
          <Description country = {country} indexLang = {props.indexLang}/>
          <Map id="Map"
          options = {{
            center: {
              lat: country.center[1],
              lng: country.center[0]
            },
            zoom: 5
          }}
          onMapLoad = {map => {
            const marker = new window.google.maps.Marker({
              position: {
                lat: country.capitalLocation.coordinates[1],
                lng: country.capitalLocation.coordinates[0]
              },
              map: map,
              title: country.localizations[props.indexLang].name
            });
          }}
          country={country.localizations[0].name}
        />
          </div>
          <div className='wrapper2'>
          <VideoPlayer country = {country}/>
        <GalleryNew country = {country} indexLang = {props.indexLang}/>
          </div>


      </div>)}
    </React.Fragment>
  )
}
//<WeatherTimeWidgets city={country.localizations[0].capital} currency={country.currency} indexLang={props.indexLang}/>
//<Description country = {country} indexLang = {props.indexLang}/>

//          <h2>{props.country.localizations[props.indexLang].name}</h2>
//<h3>{props.country.localizations[props.indexLang].capital}</h3>
//<p>{props.country.localizations[props.indexLang].description}</p>