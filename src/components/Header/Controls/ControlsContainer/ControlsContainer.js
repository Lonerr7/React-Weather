import React from 'react';
import { connect } from 'react-redux';
import { changeThemeSuccess } from '../../../../redux/weatherReducer';
import Controls from '../Controls';

const ControlsContainer = (props) => {
  const newTheme = props.theme === 'light' ? 'dark' : 'light';

  const changeThemeHandler = () => {
    props.changeTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return <Controls changeThemeHandler={changeThemeHandler} />;
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});

const dispatchToProps = {
  changeTheme: changeThemeSuccess,
};

export default connect(mapStateToProps, dispatchToProps)(ControlsContainer);
