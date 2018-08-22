import React from 'react'
import { Table, Image } from 'react-bootstrap'

const RecentSearches = (props) => {

  const  kelvinToCelsius =(kelvin) => {
    return Math.floor(kelvin - 273) + " °C"
  }
  const clickToChange = () => {
    props.changeCityProp()
  }

  const recentlySearchesTable = props.searchedCityProp.map((cell)=> {
      if (props.searchedCityProp !== undefined) {
        return (
          <Table hover responsive className="recently-searches-table" >
            <tbody>
            <tr onClick={() => {props.changeCityProp(cell.name), props.changeBodyStyleProp(cell.name), props.fetchFiveDaysProp(cell.name)}} className="recently-searches-tr">
              <td style={{ width:"200px", paddingTop: "20px" }}>{cell.name}</td>
              <td style={{ paddingTop: "20px"}}>{kelvinToCelsius(cell.main.temp)}</td>
              <td >{ <Image src = {`http://openweathermap.org/img/w/${cell.weather[0].icon}.png`} circle responsive/>}</td>           
            </tr>
          </tbody>
        </Table>
        ) 
      }
  })
  
  return (
    <div >
      <div className="recently-searches">
        Recent Searches
      </div>
      <div className="recently-searches-div">
          {recentlySearchesTable}
      </div>
    </div>
  )
}
export default RecentSearches;