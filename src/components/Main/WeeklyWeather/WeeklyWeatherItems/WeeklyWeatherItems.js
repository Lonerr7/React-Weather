import s from './WeeklyWeatherItems.module.scss';
import WeeklyWeatherItem from './WeeklyWeatherItem/WeeklyWeatherItem'

const WeeklyWeatherItems = () => {
  return <div className={s.weeklyWeatherItems}>
    <WeeklyWeatherItem />
    <WeeklyWeatherItem />
    <WeeklyWeatherItem />
    <WeeklyWeatherItem />
    <WeeklyWeatherItem />
    <WeeklyWeatherItem />
    <WeeklyWeatherItem />
    <WeeklyWeatherItem />
    <WeeklyWeatherItem />
    <WeeklyWeatherItem />
  </div>;
};

export default WeeklyWeatherItems;
