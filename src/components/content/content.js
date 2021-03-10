import React, { useContext } from 'react';
import Context from '../../context';
import styles from './content.module.scss';
import country from '../../constants/country.json';
import Card from './card/card';
import Description from './description/description';
import Gallery from './gallery/gallery';
import VideoPlayer from './video/video';
import {Map} from './map/map';

export default function Content(props) {
  //const {onToggleDefeat} = useContext(Context);
  //console.log(country);
  return (
    <React.Fragment>
    {props.country && (
    <div className = {styles.contentCountry}>
      <Description country = {props.country}/>
      <Gallery />
      <VideoPlayer />
      <Map
        id="myMap"
        options={{
          center: { lat: 41.902782, lng: 12.496365 },
          zoom: 8
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
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
          return <Card key = {index} country = {item}/>
        })
      }
    </div>)}
    </React.Fragment>
  )
}
