import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  changeThemeSuccess,
  getWeather,
} from '../../../../redux/weatherReducer';
import Controls from '../Controls';

const ControlsContainer = (props) => {
  const newTheme = props.theme === 'light' ? 'dark' : 'light';
  const [selectValue, setSelectValue] = useState('');

  const changeThemeHandler = () => {
    props.changeTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  const options = [
    { value: 'mogilev', label: 'Могилев' },
    { value: 'minsk', label: 'Минск' },
    { value: 'kyiv', label: 'Киев' },
    { value: 'berlin', label: 'Берлин' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--select-bg-color)',
      color: 'var(--text-color)',
      borderRadius: '10px',
      cursor: 'pointer',
    }),
    option: (provided) => ({
      ...provided,
      zIndex: 100,
      cursor: 'pointer',
      backgroundColor: 'var(--elems-big-color)',
      color: 'var(--text-color)',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--text-color)',
    }),
  };

  useEffect(() => {
    if (selectValue) props.getWeather(selectValue.value);
    if (!selectValue) props.getWeather();
    // eslint-disable-next-line
  }, [selectValue]);

  return (
    <Controls
      changeThemeHandler={changeThemeHandler}
      selectValue={selectValue}
      setSelectValue={setSelectValue}
      options={options}
      customStyles={customStyles}
    />
  );
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});

const dispatchToProps = {
  changeTheme: changeThemeSuccess,
  getWeather,
};

export default connect(mapStateToProps, dispatchToProps)(ControlsContainer);
