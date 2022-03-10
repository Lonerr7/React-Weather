import s from './TodayWeatherInfo.module.scss';
import wind from '../../../../assets/images/main/wind.svg';
import temp from '../../../../assets/images/main/temp.svg';
import pressure from '../../../../assets/images/main/pressure.svg';
import precip from '../../../../assets/images/main/precip.svg';
import bigCloud from '../../../../assets/images/main/bigCloud.png';
import TodayWeatherInfoTitle from './TodayWeatherInfoTitle/TodayWeatherInfoTitle';
import { createTemperature } from '../../../../helpers/helpers';

const TodayWeatherInfo = (props) => {
  const temperature = createTemperature(props.temp);
  const feelsLike = createTemperature(props.feelsLike);

  return (
    <div className={s.todayWeatherInfo}>
      <img
        className={s.todayWeatherInfo__bigCloud}
        src={bigCloud}
        alt="big cloud"
      />
      <div className={s.todayWeatherInfo__texts}>
        <div className={s.todayWeatherInfo__text}>
          <TodayWeatherInfoTitle imgSrc={temp} titleName="Температура" />
          <p className={s.todayWeatherInfo__text_1}>
            {temperature}° - ощущается как {feelsLike}°
          </p>
        </div>
        <div className={s.todayWeatherInfo__text}>
          <TodayWeatherInfoTitle imgSrc={pressure} titleName="Давление" />
          <p className={s.todayWeatherInfo__text_2}>
            {props.pressure} мм ртутного столба
          </p>
        </div>
        <div className={s.todayWeatherInfo__text}>
          <TodayWeatherInfoTitle imgSrc={precip} titleName="Осадки" />
          <p className={s.todayWeatherInfo__text_3}>Без осадков</p>
        </div>
        <div className={s.todayWeatherInfo__text}>
          <TodayWeatherInfoTitle imgSrc={wind} titleName="Ветер" />
          <p className={s.todayWeatherInfo__text_4}>{props.wind} м/с</p>
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherInfo;
