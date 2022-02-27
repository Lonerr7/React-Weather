import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { changeThemeSuccess, getWeather } from './redux/weatherReducer';

const AppContainer = (props) => {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.body.setAttribute('data-theme', localStorage.getItem('theme'));
      props.changeTheme(localStorage.getItem('theme'));
    } else {
      document.body.setAttribute('data-theme', props.theme);
      localStorage.setItem('theme', props.theme);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.getWeather();
    // eslint-disable-next-line
  }, []);

  return <App {...props} />;
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});

const dispatchToProps = {
  changeTheme: changeThemeSuccess,
  getWeather,
};

export default connect(mapStateToProps, dispatchToProps)(AppContainer);
