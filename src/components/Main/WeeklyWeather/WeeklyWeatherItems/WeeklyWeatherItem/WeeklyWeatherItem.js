import {
  createLocaleDateString,
  createTemperature,
} from '../../../../../helpers/helpers';
import s from './WeeklyWeatherItem.module.scss';

const WeeklyWeatherItem = (props) => {
  const tempDay = createTemperature(props.tempDay);
  const tempNight = createTemperature(props.tempNight);
  const capitalizedWeatherDescr =
    props.weatherDescr.charAt(0).toUpperCase() + props.weatherDescr.slice(1);

  const now = new Date(props.timeStamp * 1000);
  const options = { month: 'short', day: '2-digit' };
  const dateMonth = createLocaleDateString(now, 'ru-RU', options);
  const weekDay = createLocaleDateString(now, 'ru-RU', { weekday: 'short' });

  return (
    <div className={s.weeklyWeatherItem}>
      <div className={s.weeklyWeatherItem__inner}>
        <p className={s.weeklyWeatherItem__day}>{weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}</p>
        <p className={s.weeklyWeatherItem__dateMonth}>{dateMonth}</p>
        <div className={s.weeklyWeatherItem__imgBox}>
          <img
            className={s.weeklyWeatherItem__img}
            src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="conditionImg"
          />
        </div>
        <p className={s.weeklyWeatherItem__dayDegree}>{tempDay}°</p>
        <p className={s.weeklyWeatherItem__nightDegree}>{tempNight}°</p>
        <p className={s.weeklyWeatherItem__weatherCondition}>
          {capitalizedWeatherDescr}
        </p>
      </div>
    </div>
  );
};

export default WeeklyWeatherItem;
