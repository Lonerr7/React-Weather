import s from './WeeklyWeather.module.scss';
import WeeklyWeatherBtnsContainer from './WeeklyWeatherBtns/WeeklyWeatherBtnsContainer/WeeklyWeatherBtnsContainer';
import WeeklyWeatherItems from './WeeklyWeatherItems/WeeklyWeatherItems';

const WeeklyWeather: React.FC = () => {
  return (
    <div className={s.weeklyWeather}>
      <WeeklyWeatherBtnsContainer />
      <WeeklyWeatherItems />
    </div>
  );
};

export default WeeklyWeather;
