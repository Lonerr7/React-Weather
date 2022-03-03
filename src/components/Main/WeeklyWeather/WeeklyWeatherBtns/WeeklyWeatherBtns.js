import { useState } from 'react';
import s from './WeeklyWeatherBtns.module.scss';

const WeeklyWeatherBtns = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.weeklyWeatherBtns}>
      <button
        className={
          !isActive
            ? `${s.weeklyWeatherBtns__btn} ${s.active}`
            : s.weeklyWeatherBtns__btn
        }
        onClick={() => {
          props.get5DayWeatherHandler();
          setIsActive(false);
        }}
      >
        На 5 дней
      </button>
      <button
        className={
          isActive
            ? `${s.weeklyWeatherBtns__btn} ${s.active}`
            : s.weeklyWeatherBtns__btn
        }
        onClick={() => {
          props.get7DayWeatherHandler();
          setIsActive(true);
        }}
      >
        На неделю
      </button>
    </div>
  );
};

export default WeeklyWeatherBtns;
