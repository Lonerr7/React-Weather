import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeSlice from './themeSlice';
import weeklyWeatherSlice from './weeklyWeatherSlice';
import filtersSlice from './filtersSlice';

const rootReducer = combineReducers({
  app: weatherSlice,
  theme: themeSlice,
  weeklyWeather: weeklyWeatherSlice,
  filters: filtersSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

window.store = store;
export default store;
