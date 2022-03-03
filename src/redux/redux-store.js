import { applyMiddleware, combineReducers, createStore } from 'redux';
import weatherReducer from './weatherReducer';
import thunkMiddleware from 'redux-thunk';
import weeklyWeatherReducer from './weeklyWeatherReducer';

const reducers = combineReducers({
  app: weatherReducer,
  weeklyWeather: weeklyWeatherReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
