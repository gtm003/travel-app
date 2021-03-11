import React, { useContext } from 'react';
import Context from '../../context';
import styles from './content.module.scss';
import country from '../../constants/country.json';
import Card from './card/card';
import Description from './description/description';
import Gallery, { GalleryNew } from './gallery/gallery';
import VideoPlayer from './video/video';
import {Map} from './map/map';

export default function Content(props) {
  //const {onToggleDefeat} = useContext(Context);
  //console.log(country);
  //<Gallery country = {props.country} indexLang = {props.indexLang}/>
  return (
    <React.Fragment>
    {props.country && (
    <div className = {styles.contentCountry}>
      <Description country = {props.country} indexLang = {props.indexLang}/>
      <GalleryNew/>
      <VideoPlayer />
      <Map
        id="myMap"
        options={{
          center: { lat: 41.902782, lng: 12.496365 },
          zoom: 8
        }}
        onMapLoad={map => {
          const marker = new window.google.maps.Marker({
            position: { lat: 41.902782, lng: 12.496365 },
            map: map,
            title: 'Rome'
          });
        }}
      />
    </div>)}

    {!props.country && (
    <div className = {styles.contentMain}>
      {
        country.map((item, index) => {
          return <Card key = {index} country = {item} indexLang = {props.indexLang}/>
        })
      }
    </div>)}
    </React.Fragment>
  )
}
