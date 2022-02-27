import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import store from './redux/redux-store'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
