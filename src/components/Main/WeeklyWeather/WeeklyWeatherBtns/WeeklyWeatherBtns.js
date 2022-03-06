import s from './WeeklyWeatherBtns.module.scss';

const WeeklyWeatherBtns = (props) => {
  return (
    <div className={s.weeklyWeatherBtns}>
      <button
        className={
          !props.isActive
            ? `${s.weeklyWeatherBtns__btn} ${s.active}`
            : s.weeklyWeatherBtns__btn
        }
        onClick={() => {
          props.get5DayWeatherHandler();
          props.setIsActive(false);
        }}
      >
        На 5 дней
      </button>
      <button
        className={
          props.isActive
            ? `${s.weeklyWeatherBtns__btn} ${s.active}`
            : s.weeklyWeatherBtns__btn
        }
        onClick={() => {
          props.get7DayWeatherHandler();
          props.setIsActive(true);
        }}
      >
        На неделю
      </button>
    </div>
  );
};

export default WeeklyWeatherBtns;
