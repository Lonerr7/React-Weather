import s from './WeeklyWeatherBtns.module.scss';

const WeeklyWeatherBtns = () => {
  return (
    <div className={s.weeklyWeatherBtns}>
      <button className={s.weeklyWeatherBtns__btn}>На неделю</button>
      <button className={s.weeklyWeatherBtns__btn}>На 10 дней</button>
    </div>
  );
};

export default WeeklyWeatherBtns;
