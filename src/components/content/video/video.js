import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Player} from 'video-react';
import styles from './video.module.scss';
import "react-image-gallery/styles/scss/image-gallery.scss";

//import '~video-react/dist/video-react.css';

export default function VideoPlayer(props) {
  console.log(props.country.videoUrl);
  return (
    <div className = {styles.video}>
      <iframe width="100%" height="100%" 
      src = {props.country.videoUrl}
      
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen></iframe>
    </div>
  );
};
