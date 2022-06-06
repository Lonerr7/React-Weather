import React, { useEffect } from 'react';
import App from './App';
import { useSelector } from 'react-redux';

const AppContainer = (props) => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    // eslint-disable-next-line
  }, []);

  return <App currentWeatherCard={props.currentWeatherCard} />;
};

export default AppContainer;
