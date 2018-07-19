import React from 'react'
import { Tabs, Tab} from 'react-bootstrap'
import TodayWeather from '../components/TodayWeather'
import InputTab from '../components/InputTab'
import FiveDays from '../components/FiveDays'
import RecentlySearches from '../components/RecentlySearches'

const Main = ( props ) => {
  const style = {
    left: '100px'
  }
    return (
      <div>
        <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Today" className="todayWeather">
            <TodayWeather todayProp = {props.weatherProp.weather}/>
          </Tab>
          <Tab eventKey={2}  title="5 days/3 hours">
            <FiveDays fiveDaysProp = {props.fiveDaysProp}/>
          </Tab>
          <Tab eventKey={3}  title="Monthly" disabled>
            Tab 3 content
          </Tab>
        </Tabs>
        </div>
        {/* <div>
          <RecentlySearches searchedCityProp = {props.searchedCityProp}/>
        </div> */}
      </div>
    )
  };

  export default Main;