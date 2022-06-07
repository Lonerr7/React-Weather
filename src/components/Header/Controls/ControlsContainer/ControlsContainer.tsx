import React, { useEffect, useState, CSSProperties } from 'react';
import Controls from '../Controls';
import { changeTheme } from '../../../../redux/themeSlice';
import { getWeather } from '../../../../redux/weatherSlice';
import { deleteCurrentPopupSuccess } from '../../../../redux/weeklyWeatherSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { Cities } from '../../../../types/types';

const ControlsContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const newTheme = theme === 'light' ? 'dark' : 'light';
  const [selectValue, setSelectValue] = useState({
    value: Cities.mogilev,
    label: 'Могилев',
  });
  console.log(selectValue);

  const changeThemeHandler = () => {
    dispatch(changeTheme({ newTheme }));
    document.body.setAttribute('data-theme', newTheme);
  };

  type Option = {
    value: Cities;
    label: string;
  };

  const options: Option[] = [
    { value: Cities.mogilev, label: 'Могилев' },
    { value: Cities.minsk, label: 'Минск' },
    { value: Cities.kyiv, label: 'Киев' },
    { value: Cities.berlin, label: 'Берлин' },
  ];

  const customStyles: any = {
    control: (provided: CSSProperties) => ({
      ...provided,
      backgroundColor: 'var(--select-bg-color)',
      color: 'var(--text-color)',
      borderRadius: '10px',
      cursor: 'pointer',
    }),
    option: (provided: CSSProperties) => ({
      ...provided,
      zIndex: 100,
      cursor: 'pointer',
      backgroundColor: 'var(--elems-big-color)',
      color: 'var(--text-color)',
    }),
    singleValue: (provided: CSSProperties) => ({
      ...provided,
      color: 'var(--text-color)',
    }),
  };

  // export type CustomStyles

  useEffect(() => {
    if (selectValue) dispatch(getWeather(selectValue.value));
    if (!selectValue) dispatch(getWeather(Cities.mogilev));
    dispatch(deleteCurrentPopupSuccess());
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
