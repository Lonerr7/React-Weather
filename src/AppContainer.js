import React, { useEffect } from 'react';
import App from './App';

const AppContainer = (props) => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
  }, []);

  return <App {...props} />;
};

export default AppContainer;
