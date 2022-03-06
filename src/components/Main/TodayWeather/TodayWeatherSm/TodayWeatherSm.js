import s from './TodayWeatherSm.module.scss';
import { createTemperature } from '../../../../helpers/helpers';
import CurrentTime from '../../../common/CurrentTime/CurrentTime';

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
            src={`https://openweathermap.org/img/wn/${props.iconId}@2x.png`}
            alt="weatherImage"
          />
        </div>
      </div>
      <CurrentTime classItem={s.todayWeatherSm__text} />
      <p className={s.todayWeatherSm__text}>Город: {props.cityName}</p>
    </div>
  );
};

export default TodayWeatherSm;
