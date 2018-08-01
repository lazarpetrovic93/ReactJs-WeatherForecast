import React from 'react'
import { Table, Image } from 'react-bootstrap'

const RecentSearches = (props) => {

 const  kelvinToCelsius =(kelvin) => {
    return Math.floor(kelvin - 273) + " °C"
  }
  const recentlySearchesTable = props.searchedCityProp.map((cell)=> {
      if (props.searchedCityProp !== undefined) {
        return (
          <tr onClick={() => alert(cell.name, cell.main.temp)}>
            <td>{cell.name}</td>
            <td>{kelvinToCelsius(cell.main.temp)}</td>
            <td>{<Image src = {`http://openweathermap.org/img/w/${cell.weather[0].icon}.png`} circle responsive/>}</td>
        </tr>
        ) 
      }
  })
  
  console.log('props', props.searchedCityProp)
  return (
    <div className="recently-searches-div">
      <div className="recently-searches">
        Recent Searches
      </div>
      <Table hover responsive className="recently-searches-table">
        <tbody>
          {recentlySearchesTable}
        </tbody>
      </Table>
    </div>
  )
}
export default RecentSearches;