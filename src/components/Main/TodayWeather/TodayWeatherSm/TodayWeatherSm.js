import s from './TodayWeatherSm.module.scss';
import bigSun from '../../../../assets/images/main/bigSun.svg';
import { createTemperature } from '../../../../helpers/helpers';
import { useEffect, useState } from 'react';
import CurrentTime from './CurrentTime/CurrentTime';

const TodayWeatherSm = (props) => {
  const temp = createTemperature(props.temp);

  return (
    <div className={s.todayWeatherSm}>
      <div className={s.todayWeatherSm__info_big}>
        <div className={s.todayWeatherSm__infoBox}>
          <p className={s.todayWeatherSm__degree}>{`${temp}°`}</p>
          <p className={s.todayWeatherSm__today}>Сегодня</p>
        </div>
        <div className={s.todayWeatherSm__bigImgBox}>
          <img
            className={s.todayWeatherSm__bigImg}
            src={bigSun}
            alt="weatherImage"
          />
        </div>
      </div>
      <CurrentTime />
      <p className={s.todayWeatherSm__text}>Город: {props.cityName}</p>
    </div>
  );
};

export default TodayWeatherSm;
