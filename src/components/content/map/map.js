import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import styles from "./map.module.scss";
import coordinatesOfBorder from "../../../constants/coordinatesOfBorder.json";

/*
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export class Map extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}*/

export class Map extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map);
    console.log(coordinatesOfBorder[this.props.country]);
    if (coordinatesOfBorder[this.props.country]) {
      const coordinateArr = coordinatesOfBorder[this.props.country];
      coordinateArr.forEach(item => {
        const singlePoligonCoordinate = item.split(' ').map(item => item.split(','));
        const coordinateObj = singlePoligonCoordinate.map(item => item = {lat: Number(item[1]), lng: Number(item[0])});
        const coordinateObjTest1 = coordinateObj.filter(item => !isNaN(item.lng));
        const coordinateObjTest2 = coordinateObjTest1.filter(item => !isNaN(item.lat));
        const border = new window.google.maps.Polygon({
          paths: coordinateObjTest2,
          strokeColor: "#00FF00",
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: "#00FF00",
          fillOpacity: 0.35,
        });
        border.setMap(map);
      })
    }
  }
  
  componentDidMount() {
    this.onScriptLoad();
  }

  render() {
    return (
      <div className ={styles.map} id={this.props.id} />
    );
  }
}

//export default Map