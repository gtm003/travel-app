import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import styles from './gallery.module.scss';
import places from '../../../constants/places.json';

export class GalleryNew extends React.Component {
  constructor(props) {
    super();
    this.state = {
      index: 0,
      indexLang: props.indexLang,
    };
    this.country = props.country.localizations[0].name;
    this.images = this.getImages();
  }

  componentDidUpdate(prevProps) {
    if (this.props.indexLang !== prevProps.indexLang) {
      this.setState({indexLang: this.props.indexLang});
    }
  }

  onSlide(index) {
    this.setState({
      index: index
    })
  }

  getImages() {
    const currentPlaces = places.filter(place => place.country === this.country);
    const images = currentPlaces.map(item => 
      item = {
        original: item.photoUrl,
        thumbnail: item.photoUrl,
      }
    );
    return images;
  }

  getDescriptions(indexLang) {
    const currentPlaces = places.filter(place => place.country === this.country);
    const descriptions = currentPlaces.map(item => 
      item = item.localizations[indexLang].description
    );
    return descriptions;
  }

  getName(indexLang) {
    const currentPlaces = places.filter(place => place.country === this.country);
    const descriptions = currentPlaces.map(item => 
      item = item.localizations[indexLang].name
    );
    return descriptions;
  }

  render() {
    return (
      <div className = {styles.gallery}>
        <section className='app'>
        <ImageGallery
          items={this.images}
          lazyLoad={false}
          onSlide={this.onSlide.bind(this)}
          infinite={true}
          showBullets={true}
          showFullscreenButton={true}
          showThumbnails={true}
          showIndex={true}
          thumbnailPosition="bottom"
          slideDuration={450}
          slideInterval={2000}
          slideOnThumbnailOver={false}
          additionalClass="app-image-gallery"
          useWindowKeyDown={true}
        />
      </section>
      <div className = {styles.caption}>
        <b>{`${this.getName(this.state.indexLang)[this.state.index]}. `}</b>
        {this.getDescriptions(this.state.indexLang)[this.state.index]}
      </div>

      </div>
    );
  }
}

//        <button className = {styles.moreButton}/>