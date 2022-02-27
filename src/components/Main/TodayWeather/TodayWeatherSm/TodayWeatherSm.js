import s from './TodayWeatherSm.module.scss';
import bigSun from '../../../../assets/images/main/bigSun.svg';
import { createTemp } from '../../../../helpers/helpers';

const TodayWeatherSm = (props) => {
  const today = new Date();
  const minutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();

  const temp = createTemp(props.temp);

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
      <p className={s.todayWeatherSm__text}>
        Время: {`${today.getHours()}:${minutes}`}
      </p>
      <p className={s.todayWeatherSm__text}>Город: {props.cityName}</p>
    </div>
  );
};

export default TodayWeatherSm;
