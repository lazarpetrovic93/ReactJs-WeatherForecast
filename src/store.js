import {createStore, combineReducers, applyMiddleware } from 'redux'
import weatherReducer from '../src/reducers/weatherReducer'
import thunk from 'redux-thunk'


export default createStore(
  combineReducers({
    weather: weatherReducer,
    inputText: weatherReducer,
  }),{}, applyMiddleware(thunk));