import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class SimpleExample extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
  }


  render() {
    console.log('props', this.props)
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={13}>
      <TileLayer
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <span>
            A pretty CSS3 popup. <br /> Easily customizable.
          </span>
        </Popup>
      </Marker>
    </Map>
    )
  }
}