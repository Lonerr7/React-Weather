import TodayWeatherInfoTitle from '../../Main/TodayWeather/TodayWeatherInfo/TodayWeatherInfoTitle/TodayWeatherInfoTitle';
import s from './TodayWeatherInfoSm.module.scss';
import temp from '../../../assets/images/main/temp.svg';
import pressure from '../../../assets/images/main/pressure.svg';
import precip from '../../../assets/images/main/precip.svg';
import wind from '../../../assets/images/main/wind.svg';

const TodayWeatherInfoSm = (props) => {
  return (
    <div className={s.todayWeatherInfo}>
      <div className={s.todayWeatherInfo__titles}>
        <TodayWeatherInfoTitle imgSrc={temp} titleName="Температура" />
        <TodayWeatherInfoTitle imgSrc={pressure} titleName="Давление" />
        <TodayWeatherInfoTitle imgSrc={precip} titleName="Осадки" />
        <TodayWeatherInfoTitle imgSrc={wind} titleName="Ветер" />
      </div>
      <div className={s.todayWeatherInfo__texts}>
        <p className={s.todayWeatherInfo__text_1}>
          {props.temp}° - ощущается как {props.feelsLike}°
        </p>
        <p className={s.todayWeatherInfo__text_2}>
          {props.pressure} мм ртутного столба
        </p>
        <p className={s.todayWeatherInfo__text_3}>Без осадков</p>
        <p className={s.todayWeatherInfo__text_4}>{props.wind} м/с</p>
      </div>
    </div>
  );
};

export default TodayWeatherInfoSm;
