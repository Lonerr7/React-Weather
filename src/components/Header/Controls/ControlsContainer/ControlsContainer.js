import React, { useEffect, useState } from 'react';
import Controls from '../Controls';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../../redux/themeSlice';
import {
  getWeather,
  setIsActiveBtnSucess,
} from '../../../../redux/weatherSlice';

const ControlsContainer = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const newTheme = theme === 'light' ? 'dark' : 'light';
  const [selectValue, setSelectValue] = useState('');

  const changeThemeHandler = () => {
    dispatch(changeTheme({ newTheme }));
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
    if (selectValue) dispatch(getWeather(selectValue.value));
    if (!selectValue) dispatch(getWeather());
    dispatch(setIsActiveBtnSucess(false));
    // props.deleteCurrentPopupSuccess();
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

export default ControlsContainer;
