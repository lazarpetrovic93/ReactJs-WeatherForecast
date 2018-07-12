import React, { Component } from 'react'
import '../App.css'
import Main from '../components/Main'
import { connect } from 'react-redux';
import { fetchDefaultCity, changeInputText, changeCity, fetchFiveDays} from '../actions/weatherActions'
import { PageHeader, Button } from 'react-bootstrap'
import FaMotorcycle from 'react-icons/lib/fa/motorcycle'
import backgroundImage from '../pics/way.jpg'
import TiWeatherPartlySunny from 'react-icons/lib/ti/weather-partly-sunny'
import TiWeatherSunny from 'react-icons/lib/ti/weather-sunny'
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow'
import InputTab from '../components/InputTab'

const bodyStyle = {
  backgroundImage: `url(${backgroundImage})`,
  height: "1000px",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleChange(event) {
    this.props.changeInputText(event.target.value)
  }

  handleSubmit(event, inputTextVal) {
    event.preventDefault();
    if (this.props.inputTextVal.inputText) {
      this.props.changeCity(this.props.inputTextVal.inputText)
      this.props.fetchFiveDays(this.props.inputTextVal.inputText)
      document.getElementById('formID').value = ''
    }
  }

  componentWillMount() {
    this.props.fetchDefaultCity()
  }

  render() {
    return (
      <div style={bodyStyle}>
        <PageHeader>
          <div className="d-flex flex-row">
            <div className="p-2">
              <h3 ><TiWeatherPartlySunny /><TiWeatherSunny /><TiWeatherSnow /> Weather for</h3 >
            </div>
            <div className="p-2">
              <FaMotorcycle className="Bike-icon" size={60}/>
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
                fiveDaysProp = {this.props.weather.fiveDays}/>
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
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
