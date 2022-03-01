import s from './WeeklyWeather.module.scss';
import WeeklyWeatherBtns from './WeeklyWeatherBtns/WeeklyWeatherBtns';
import WeeklyWeatherItems from './WeeklyWeatherItems/WeeklyWeatherItems';

const WeeklyWeather = () => {
  return (
    <div className={s.weeklyWeather}>
      <WeeklyWeatherBtns />
      <WeeklyWeatherItems />
    </div>
  )
}

export default WeeklyWeather