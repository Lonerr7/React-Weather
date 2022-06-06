import { useSelector } from 'react-redux';
import WeeklyWeatherPopup from '../WeeklyWeatherPopup';
import { deleteCurrentPopupSuccess } from '../../../../../redux/weeklyWeatherSlice';
import {
  createLocaleDateString,
  createTemperature,
} from '../../../../../helpers/helpers';
import s from './WeeklyWeatherPopupContainer.module.scss';

const WeeklyWeatherPopupContainer = (props) => {
  const currentCitySelector = useSelector((state) => state.app.currentCity);

  const currentWeather = props.currentWeatherCard[0];
  const temp = createTemperature(currentWeather.temp.day);
  const feelsLike = createTemperature(currentWeather.feels_like.day);

  const weekDay = createLocaleDateString(
    new Date(currentWeather.dt * 1000),
    'ru-RU',
    { weekday: 'long' }
  );
  const weekDayCapitalized = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);

  const currentCity =
    currentCitySelector.charAt(0).toUpperCase() + currentCitySelector.slice(1);

  return (
    <div className={s.overlay} onClick={deleteCurrentPopupSuccess}>
      <WeeklyWeatherPopup
        deleteCurrentPopupSuccess={deleteCurrentPopupSuccess}
        temp={temp}
        feelsLike={feelsLike}
        weekDay={weekDayCapitalized}
        iconId={currentWeather.weather[0].icon}
        currentCity={currentCity}
        pressure={currentWeather.pressure}
        wind={currentWeather.wind_speed}
      />
    </div>
  );
};

export default WeeklyWeatherPopupContainer;
