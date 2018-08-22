import {createStore, combineReducers, applyMiddleware } from 'redux'
import weatherReducer from '../src/reducers/weatherReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


export default createStore(
  combineReducers({
    weather: weatherReducer,
  }),{}, applyMiddleware(logger, thunk));