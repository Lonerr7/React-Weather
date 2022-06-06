import { createSelector } from '@reduxjs/toolkit';

const selectAllWeatherItems = (state) => state.weeklyWeather.weatherArr;
const selectActiveFilter = (state) => state.filters.filter;

export const selectWeatherItemsByFilter = createSelector(
  [selectAllWeatherItems, selectActiveFilter],
  (allWeatherItems, activeFilter) => {
    if (activeFilter === '7-days') return allWeatherItems;

    return allWeatherItems.slice(0, 5);
  }
);
