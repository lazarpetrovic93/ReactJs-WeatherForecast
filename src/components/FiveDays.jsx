import React,{ Component } from 'react'
import moment from 'moment'
import { Table, Image } from 'react-bootstrap'
import swal from 'sweetalert'

export default class FiveDays extends Component {
  constructor(props){
    super(props);
  this.kelvinToCelsius = this.kelvinToCelsius.bind(this)
  this.timestampToTime = this.timestampToTime.bind(this)
  this.fiveDays = ''
  this.fiveDaysTable = ''
  }

  //converting kelvin to celsius
  kelvinToCelsius(kelvin) {
    return Math.floor(kelvin - 273) + " °C"
  }
  
  //converting date
  timestampToTime(date) {
    return moment.unix(date).format("LLLL");
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.fiveDaysProp !== nextProps.fiveDaysProp){
      this.fiveDays = nextProps.fiveDaysProp
      if (this.fiveDays !== undefined) {
        this.fiveDaysTable = this.fiveDays.map((day) => {
          return (
            <div>
              <Table striped condensed hover responsive className="table table-striped table-dark">
                <thead>
                  <tr >
                    <th className="tableCellHead">Day/Time</th>
                    <th className="tableCellHead">Description</th>
                    <th className="tableCellHead">Temperature</th>
                    <th className="tableCellHead">Max Temp</th>
                    <th className="tableCellHead">Min Temp</th>
                    <th className="tableCellHead">Presure</th>
                    <th className="tableCellHead">Humidity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-size-custom">
                    <td className="tableCellDayTime fiveDaysTableCellPadding">{this.timestampToTime(day.dt)}</td>
                    <td className="tableCell ">{day.weather[0].main}<Image src = {`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} circle /></td>
                    <td className="tableCell fiveDaysTableCellPadding">{this.kelvinToCelsius(day.main.temp)}</td>
                    <td className="tableCell fiveDaysTableCellPadding">{this.kelvinToCelsius(day.main.temp_max)}</td>
                    <td className="tableCell fiveDaysTableCellPadding">{this.kelvinToCelsius(day.main.temp_min)}</td>
                    <td className="tableCell fiveDaysTableCellPadding">{Math.floor(day.main.pressure)} hpa</td>
                    <td className="tableCell fiveDaysTableCellPadding">{day.main.humidity} %</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )
        })
      } else {
        swal("For better accuracy insert City, Country!..");
      }
    }
  }

  render() {
    return (
      <div className="fiveDaysTable">
        { this.fiveDaysTable }
      </div>
  )}
}