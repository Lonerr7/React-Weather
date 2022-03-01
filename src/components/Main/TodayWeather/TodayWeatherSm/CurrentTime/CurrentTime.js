import { useState } from 'react';
import s from '../TodayWeatherSm.module.scss';

const CurrentTime = () => {
  let [currentTime, serCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  setInterval(() => {
    serCurrentTime(
      new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    );
  }, 1000);

  return <p className={s.todayWeatherSm__text}>Время: {currentTime}</p>;
};

export default CurrentTime;
