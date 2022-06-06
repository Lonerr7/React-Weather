import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const selectAllWeatherItems = (state: RootState) =>
  state.weeklyWeather.weatherArr;
const selectActiveFilter = (state: RootState) => state.filters.filter;

export const selectWeatherItemsByFilter = createSelector(
  [selectAllWeatherItems, selectActiveFilter],
  (allWeatherItems, activeFilter) => {
    if (activeFilter === '7-days') return allWeatherItems;

    return allWeatherItems.slice(0, 5);
  }
);
