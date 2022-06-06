import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { weatherAPI } from '../api/api';

const initialState = {
  weatherArr: [],
  currentWeatherCard: null,
  isActiveBtn: false,
};

export const get7DaysWeather = createAsyncThunk(
  'weeklyWeather/get7DaysWeather',
  async ({ lat, lng }) => {
    const response = await weatherAPI.get7DayWeatherInfo(lat, lng);
    return response.data.daily;
  }
);

const weeklyWeatherSlice = createSlice({
  name: 'weeklyWeather',
  initialState,
  reducers: {
    setIsActiveBtnSucess(state, action) {
      state.isActiveBtn = action.payload;
    },
  },
  extraReducers: {
    [get7DaysWeather.fulfilled]: (state, action) => {
      state.weatherArr = action.payload.slice(0, -1);
    },
  },
});

export const { setIsActiveBtnSucess } = weeklyWeatherSlice.actions;
export default weeklyWeatherSlice.reducer;
