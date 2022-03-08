import { connect } from 'react-redux';
import WeeklyWeatherPopup from '../WeeklyWeatherPopup';
import { deleteCurrentPopupSuccess } from '../../../../../redux/weeklyWeatherReducer';
import {
  createLocaleDateString,
  createTemperature,
} from '../../../../../helpers/helpers';
import s from './WeeklyWeatherPopupContainer.module.scss';

const WeeklyWeatherPopupContainer = (props) => {
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
    props.currentCity.charAt(0).toUpperCase() + props.currentCity.slice(1);

  return (
    <div className={s.overlay} onClick={props.deleteCurrentPopupSuccess}>
      <WeeklyWeatherPopup
        deleteCurrentPopupSuccess={props.deleteCurrentPopupSuccess}
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

const mapStateToProps = (state) => ({
  currentCity: state.app.currentCity,
});

const dispatchToProps = {
  deleteCurrentPopupSuccess,
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(WeeklyWeatherPopupContainer);
