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
  //console.log(props.country.capitalLocation.coordinates);
  //<Gallery country = {props.country} indexLang = {props.indexLang}/>
  return (
    <React.Fragment>
    {props.country && (
    <div className = {styles.contentCountry}>
      <Description country = {props.country} indexLang = {props.indexLang}/>
      <GalleryNew country = {props.country} indexLang = {props.indexLang}/>
      <VideoPlayer country = {props.country}/>
      <Map id="Map"
        options={{
          center: { 
            lat: props.country.capitalLocation.coordinates[1], 
            lng: props.country.capitalLocation.coordinates[0] 
          },
          zoom: 6
        }}
        onMapLoad={map => {
          const marker = new window.google.maps.Marker({
            position: {
              lat: props.country.capitalLocation.coordinates[1], 
              lng: props.country.capitalLocation.coordinates[0] 
            },
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
