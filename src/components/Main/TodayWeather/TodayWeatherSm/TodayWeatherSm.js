import s from './TodayWeatherSm.module.scss';
import bigSun from '../../../../assets/images/main/bigSun.svg'

const TodayWeatherSm = () => {
  return (
    <div className={s.todayWeatherSm}>
      <div className={s.todayWeatherSm__info_big}>
        <div className={s.todayWeatherSm__infoBox}>
          <p className={s.todayWeatherSm__degree}>20°</p>
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
      <p className={s.todayWeatherSm__text}>Время: 21:54</p>
      <p className={s.todayWeatherSm__text}>Город: Санкт-Петербург</p>
    </div>
  );
};

export default TodayWeatherSm;
