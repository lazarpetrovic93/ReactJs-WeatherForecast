import React, { Component } from 'react'
import '../App.css'
import Main from '../components/Main'
import { connect } from 'react-redux';
import { fetchDefaultCity, changeInputText, changeCity, fetchFiveDays} from '../actions/weatherActions'
import { PageHeader } from 'react-bootstrap'
import FaMotorcycle from 'react-icons/lib/fa/motorcycle'
import sunBackground from '../pics/Sun.png'
import thunderStormBackground from '../pics/Thunderstorm.png'
import cloudsBackground from '../pics/Clouds_PNG_Clipart-870.png'
import rainBackground from '../pics/Rain-PNG-Transparent-Image.png'
import TiWeatherPartlySunny from 'react-icons/lib/ti/weather-partly-sunny'
import TiWeatherSunny from 'react-icons/lib/ti/weather-sunny'
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow'
import InputTab from '../components/InputTab'

let bodyStyle = {
  backgroundImage: `url(${sunBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundColor: '#88C1D5'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeBodyStyle = this.changeBodyStyle.bind(this);
  }

  handleChange(event) {
    this.props.changeInputText(event.target.value)
  }

  handleSubmit(event, inputTextVal) {
    event.preventDefault();
    if (this.props.inputTextVal.inputText) {
      this.props.changeCity(this.props.inputTextVal.inputText)
      this.props.fetchFiveDays(this.props.inputTextVal.inputText)
      // console.log('#####This is weather described', this.props.weather.weather.weather[0].main)
    }
    this.changeBodyStyle()
  }

  changeBodyStyle() {
    if (this.props.weather.weather.weather[0].main === "Rain") {
      bodyStyle = {
        ...bodyStyle,
        backgroundImage: `url(${rainBackground})`,
    }
  }
  if (this.props.weather.weather.weather[0].main === "Clouds") {
    bodyStyle = {
      ...bodyStyle,
      backgroundImage: `url(${cloudsBackground})`,
  }
}
  if (this.props.weather.weather.weather[0].main === "Clear") {
    bodyStyle = {
      ...bodyStyle,
      backgroundImage: `url(${sunBackground})`,
    }
  }
  if (this.props.weather.weather.weather[0].main === "Thunderstorm") {
    bodyStyle = {
      ...bodyStyle,
      backgroundImage: `url(${thunderStormBackground})`,
    }
  }
}
  componentWillMount() {
    this.props.fetchDefaultCity()
    this.props.fetchFiveDays('Belgrade')
  }

  render() {
    return (
      <div style={bodyStyle}>
        <PageHeader>
          <div className="d-flex flex-row">
            <div className="p-2 d-flex flex-row" style={{marginTop: '15px'}}>
              <div className="p-2">
                <TiWeatherPartlySunny/>
              </div>
              <div className="p-2">
                <TiWeatherSunny/>
              </div>
              <div  className="p-2">
                <TiWeatherSnow/>
              </div>
              <div className="p-2">
                Weather forecast
              </div>
              {/* <div className="p-2">
                <FaMotorcycle className="Bike-icon" size={60}/>
              </div> */}
            </div>
            <div className="p-2 ml-auto" style={{marginTop: '15px'}}>
            <InputTab inputHandleChange = {this.handleChange}
                      inputHandleSubmit = {this.handleSubmit}
                      inputTextProps = {this.props.inputTextVal.inputText}/>
            </div>
          </div>
        </PageHeader>
        <div>
          <Main weatherProp = {this.props.weather}
                inputTextProp = {this.props.inputTextVal}
                fiveDaysProp = {this.props.weather.fiveDays}
                fetchRecentlySearchedCity = {this.props.fetchRecentlySearchedCity}
                searchedCityProp = {this.props.weather.searchedCity}
                changeCityProp = {this.props.changeCity }
                fetchFiveDaysProp = {this.props.fetchFiveDays}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    inputTextVal: state.inputText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDefaultCity: () => {
      dispatch(fetchDefaultCity());
    },
    changeInputText: (text) => {
      dispatch(changeInputText(text))
    },
    changeCity: (text) => {
      dispatch(changeCity(text))
    },
    fetchFiveDays: (text) => {
      dispatch(fetchFiveDays(text))
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
