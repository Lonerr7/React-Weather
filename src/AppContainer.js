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

  // useEffect(() => {
  //   if (props.currentWeatherCard) document.body.style.overflow = `hidden`;
  //   if (!props.currentWeatherCard) document.body.style.overflow = `auto `;
  // }, [props.currentWeatherCard]);

  return <App currentWeatherCard={props.currentWeatherCard} />;
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
  currentWeatherCard: state.weeklyWeather.currentWeatherCard,
});

const dispatchToProps = {
  changeTheme: changeThemeSuccess,
  getWeather,
};

export default connect(mapStateToProps, dispatchToProps)(AppContainer);
