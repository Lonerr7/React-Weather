import { useSelector } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import s from './Main.module.scss';
import TodayWeather from './TodayWeather/TodayWeather';
import WeeklyWeather from './WeeklyWeather/WeeklyWeather';

const Main = () => {
  const weatherInfo = useSelector((state) => state.app.weatherInfo);

  return (
    <main className={weatherInfo ? s.main : `${s.main} ${s.invisible}`}>
      {weatherInfo ? (
        <div className={s.main__inner}>
          <TodayWeather weatherInfo={weatherInfo} />
          <WeeklyWeather />
        </div>
      ) : (
        <Preloader />
      )}
    </main>
  );
};

export default Main;
