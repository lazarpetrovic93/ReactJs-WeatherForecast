import React, { Component } from 'react'
import { Image, Table } from 'react-bootstrap'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import  'leaflet/dist/leaflet.css'
import moment from 'moment'
import LocationIcon from 'react-icons/lib/ti/location-outline'
import L from 'leaflet'
import swal from 'sweetalert'

class TodayWeather extends Component {
  constructor(props){
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }

    this.weatherSys = ''
    this.weatherW = ''
    this.weahterMain = ''
    this.kelvinToCelsius = this.kelvinToCelsius.bind(this)
    this.timestampToTime = this.timestampToTime.bind(this)
  }


  componentWillReceiveProps(nextProps){
    if(this.props.todayProp.name !== nextProps.todayProp.name) {
      this.weatherSys = nextProps.todayProp.sys
      this.weatherW = nextProps.todayProp.weather[0]
      // if (nextProps.todayProp.weather[0] !== undefined) {
      //   this.weatherW = nextProps.todayProp.weather[0]
      // } 
      // else {
      //   swal("error");
      // }
      this.weahterMain = nextProps.todayProp.main
      this.setState({
        lat: nextProps.todayProp.coord.lat,
        lng: nextProps.todayProp.coord.lon,
      })
    }
  }

  kelvinToCelsius(kelvin) {
    return Math.floor(kelvin - 273) + " °C"
  }

  timestampToTime(date) {
    return moment.unix(date).format("HH:MM");
  }

  render(){
    // const customMarker = L.icon({ iconUrl: require('../pics/marker.png'), })
    const position = [this.state.lat, this.state.lng]
    return (
      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 todayDiv">
        <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12 d-flex p-2 flex-column div1">
          <div className="d-flex flex-row" style={{fontSize: '30px'}}>
            <LocationIcon size={30} className="p-2"/>
            <p className="p-2 font-size-25">{this.props.todayProp.name},{this.weatherSys.country}</p>
            <div className="p-2 font-size-25">{this.kelvinToCelsius(this.weahterMain.temp)}</div>
            <div className="p-2 font-size-25"><Image src = {`http://openweathermap.org/img/w/${this.weatherW.icon}.png`} circle responsive/></div>
          </div>
          <div className="p-2">
            <Table bordered condensed hover style={{marginTop: '15px'}}>
              <tbody>
                <tr>
                  <td>
                    <h4 className="p-2 font-size-25">Max: {this.kelvinToCelsius(this.weahterMain.temp_max)}</h4>
                  </td>
                  <td>
                    <h4 className="p-2 font-size-25">Min: {this.kelvinToCelsius(this.weahterMain.temp_min)}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-size-custom">Pressure:</h5>
                  </td>
                  <td>
                    <h5 className="font-size-custom">{this.weahterMain.pressure} hpa</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-size-custom">Humidity:</h5>
                  </td>
                  <td>
                    <h5 className="font-size-custom">{this.weahterMain.humidity} %</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-size-custom">Sunrise:</h5>
                  </td>
                  <td>
                    <h5 className="font-size-custom">{this.timestampToTime(this.weatherSys.sunrise)} AM</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-size-custom">Sunset:</h5>
                  </td>
                  <td>
                    <h5 className="font-size-custom">{this.timestampToTime(this.weatherSys.sunset)} PM</h5>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12 div2">
          <div className="leafletCont">
            <Map center={position} zoom={this.state.zoom} className="leafletCont">
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </Map>
          </div>
        </div>
      </div>
    )

  }

}

export default TodayWeather;