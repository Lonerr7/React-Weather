import s from './Main.module.scss';
import TodayWeather from './TodayWeather/TodayWeather';
import WeeklyWeather from './WeeklyWeather/WeeklyWeather';

const Main = () => {
  return (
    <main className={s.main}>
      <div className={s.main__inner}>
        <TodayWeather />
        <WeeklyWeather />
      </div>
    </main>
  );
};

export default Main;
