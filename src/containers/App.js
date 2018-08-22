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
import swal from 'sweetalert'

let bodyStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundColor: '#88C1D5',
  height: 'auto'
  
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeBodyStyle = this.changeBodyStyle.bind(this);
  }
  changeBodyStyle() {
    console.log('change body style fn: ', this.props.weather.weather.weather[0].main)
    if (this.props.weather.weather.weather[0].main === "Rain") {
      
      bodyStyle = {
        ...bodyStyle,
        backgroundImage: `url(${rainBackground})`,
    }
    console.log('usao u rain')
  }
    if (this.props.weather.weather.weather[0].main === "Clouds") {
      bodyStyle = {
        ...bodyStyle,
        backgroundImage: `url(${cloudsBackground})`,
    }
    console.log('usao u clouds')
  }
    if (this.props.weather.weather.weather[0].main === "Clear") {
      bodyStyle = {
        ...bodyStyle,
        backgroundImage: `url(${sunBackground})`,
      }
      console.log('usao u clear')
    }
    if (this.props.weather.weather.weather[0].main === "Thunderstorm") {
      
      bodyStyle = {
        ...bodyStyle,
        backgroundImage: `url(${thunderStormBackground})`,
      }
      console.log('usao u thunderstorm')
    }
  }

  handleChange(event) {
    this.props.changeInputText(event.target.value)
  }

  handleSubmit(event, weather) {
    event.preventDefault();
    if (this.props.weather.inputText) {
      this.props.changeCity(this.props.weather.inputText)
      this.props.fetchFiveDays(this.props.weather.inputText)
    }
    if (this.props.weather.weather.name === "error") {
      swal("Error, the searched city does not exist!");
    }
    this.changeBodyStyle()
  }

  componentDidMount() {
    this.props.fetchDefaultCity('Belgrade')
    this.props.fetchFiveDays('Belgrade')
  }

  render() {
    if (this.props.weather.weather.name) {
      this.changeBodyStyle()
    }
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
                      inputTextProps = {this.props.weather.inputText}/>
            </div>
          </div>
        </PageHeader>
        <div>
          <Main weatherProp = {this.props.weather}
                inputTextProp = {this.props.weather}
                fiveDaysProp = {this.props.weather.fiveDays}
                changeBodyStyleProp = {this.changeBodyStyle}
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
    weather: state.weather
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDefaultCity: (text) => {
      dispatch(fetchDefaultCity(text));
    },
    changeInputText: (text) => {
      dispatch(changeInputText(text))
    },
    changeCity: (text) => {
      console.log('#Trigerovano');
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
