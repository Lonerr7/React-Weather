import { applyMiddleware, combineReducers, createStore } from 'redux';
import weatherReducer from './weatherReducer';
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  app: weatherReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;