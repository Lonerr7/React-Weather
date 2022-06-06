import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { weatherAPI } from '../api/api';
import { WeeklyWeatherItem, WeeklyWeatherState } from '../types/types';

const initialState: WeeklyWeatherState = {
  weatherArr: [],
  currentWeatherCard: null,
  isActiveBtn: false,
};

type ThunkParams = {
  lat: number;
  lng: number;
};

export const get7DaysWeather = createAsyncThunk(
  'weeklyWeather/get7DaysWeather',
  async ({ lat, lng }: ThunkParams) => {
    const response = await weatherAPI.get7DayWeatherInfo(lat, lng);
    return response.data.daily;
  }
);

const weeklyWeatherSlice = createSlice({
  name: 'weeklyWeather',
  initialState,
  reducers: {
    setIsActiveBtnSucess(state, action: PayloadAction<boolean>) {
      state.isActiveBtn = action.payload;
    },
    setCurrentPopupSuccess(state, action: PayloadAction<number>) {
      state.currentWeatherCard = state.weatherArr.filter(
        (item) => item.dt === action.payload
      );
    },
    deleteCurrentPopupSuccess(state) {
      state.currentWeatherCard = null;
    },
  },
  extraReducers: {
    [get7DaysWeather.fulfilled.type]: (
      state,
      action: PayloadAction<WeeklyWeatherItem[]>
    ) => {
      state.weatherArr = action.payload.slice(0, -1);
    },
  },
});

export const {
  setIsActiveBtnSucess,
  setCurrentPopupSuccess,
  deleteCurrentPopupSuccess,
} = weeklyWeatherSlice.actions;
export default weeklyWeatherSlice.reducer;
