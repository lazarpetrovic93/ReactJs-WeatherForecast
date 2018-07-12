import React, { Component } from 'react'
import { Image, Table } from 'react-bootstrap'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import  'leaflet/dist/leaflet.css'
import moment from 'moment'
import LocationIcon from 'react-icons/lib/ti/location-outline'
import L from 'leaflet'

// const TodayWheater = (props) => {
//   console.log('props: ', props);
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
    const customMarker = L.icon({ iconUrl: require('../pics/marker.png'), })
    const position = [this.state.lat, this.state.lng]
    console.log(position)
    return (
      <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 d-flex flex-row">
        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 d-flex p-2 flex-column">
          <div className="d-flex flex-row">
            <h1 className="p-2 customH1"><LocationIcon />{this.props.todayProp.name},{this.weatherSys.country}</h1>
            <div className="p-2 ml-auto font-size-25 d-flex flex-row" style={{ marginTop: '10px'}}>
              <div className="p-2" style={{fontSize: '35px'}}>{this.kelvinToCelsius(this.weahterMain.temp)}</div>
              <div className="p-2 ml-auto"><Image src = {`http://openweathermap.org/img/w/${this.weatherW.icon}.png`} circle responsive/></div>
            </div>
          </div>
          <div className="p-2">
            <Table striped bordered condensed hover style={{marginTop: '15px'}}>
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
                    <h5 className="font-size-20">Pressure:</h5>
                  </td>
                  <td>
                    <h5 className="font-size-20">{this.weahterMain.pressure} hpa</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-size-20">Humidity:</h5>
                  </td>
                  <td>
                    <h5 className="font-size-20">{this.weahterMain.humidity} %</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-size-20">Sunrise:</h5>
                  </td>
                  <td>
                    <h5 className="font-size-20">{this.timestampToTime(this.weatherSys.sunrise)} AM</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5 className="font-size-20">Sunset:</h5>
                  </td>
                  <td>
                    <h5 className="font-size-20">{this.timestampToTime(this.weatherSys.sunset)} PM</h5>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 p-2">
          <div className="leafletCont">
            <Map icon={customMarker} center={position} zoom={this.state.zoom} className="leafletCont">
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={customMarker}>
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