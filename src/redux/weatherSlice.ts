import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { weatherAPI } from '../api/api';
import { citiesFn } from '../cities/cities';
import { WeatherInfo, WeatherState } from '../types/types';
import { get7DaysWeather } from './weeklyWeatherSlice';

const initialState: WeatherState = {
  weatherInfo: null,
  currentCity: '',
};

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (cityName: string, { dispatch }) => {
    const city = citiesFn(cityName)!;
    dispatch(setCurrentCitySuccess(cityName));
    const response = await weatherAPI.getWeatherInfo(city.lat, city.lng);
    await dispatch(get7DaysWeather(city));
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentCitySuccess(state, action: PayloadAction<string>) {
      state.currentCity = action.payload;
    },
  },
  extraReducers: {
    [getWeather.fulfilled.type]: (
      state,
      action: PayloadAction<WeatherInfo>
    ) => {
      state.weatherInfo = action.payload;
    },
  },
});

export const { setCurrentCitySuccess } = weatherSlice.actions;
export default weatherSlice.reducer;
