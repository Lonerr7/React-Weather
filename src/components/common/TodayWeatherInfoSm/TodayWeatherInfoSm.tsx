import TodayWeatherInfoTitle from '../../Main/TodayWeather/TodayWeatherInfo/TodayWeatherInfoTitle/TodayWeatherInfoTitle';
import s from './TodayWeatherInfoSm.module.scss';
import temp from '../../../assets/images/main/temp.svg';
import pressure from '../../../assets/images/main/pressure.svg';
import precip from '../../../assets/images/main/precip.svg';
import wind from '../../../assets/images/main/wind.svg';

type TodayWeatherInfoSmProps = {
  temp: number;
  feelsLike: number;
  pressure: number;
  wind: number;
};

const TodayWeatherInfoSm: React.FC<TodayWeatherInfoSmProps> = (props) => {
  return (
    <div className={s.todayWeatherInfo}>
      <div className={s.todayWeatherInfo__texts}>
        <div className={s.todayWeatherInfo__text}>
          <TodayWeatherInfoTitle imgSrc={temp} titleName="Температура" />
          <p className={s.todayWeatherInfo__text_1}>
            {props.temp}° - ощущается как {props.feelsLike}°
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

export default TodayWeatherInfoSm;
