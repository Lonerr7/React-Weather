import s from './TodayWeatherInfo.module.scss';
import wind from '../../../../assets/images/main/wind.svg';
import temp from '../../../../assets/images/main/temp.svg';
import pressure from '../../../../assets/images/main/pressure.svg';
import precip from '../../../../assets/images/main/precip.svg';
import bigCloud from '../../../../assets/images/main/bigCloud.png';
import TodayWeatherInfoTitle from './TodayWeatherInfoTitle/TodayWeatherInfoTitle';
import { createTemp } from '../../../../helpers/helpers';

const TodayWeatherInfo = (props) => {
  const temperature = createTemp(props.temp);
  const feelsLike = createTemp(props.feelsLike);

  return (
    <div className={s.todayWeatherInfo}>
      <img
        className={s.todayWeatherInfo__bigCloud}
        src={bigCloud}
        alt="big cloud"
      />
      <div className={s.todayWeatherInfo__titles}>
        <TodayWeatherInfoTitle imgSrc={temp} titleName="Температура" />
        <TodayWeatherInfoTitle imgSrc={pressure} titleName="Давление" />
        <TodayWeatherInfoTitle imgSrc={precip} titleName="Осадки" />
        <TodayWeatherInfoTitle imgSrc={wind} titleName="Ветер" />
      </div>
      <div className={s.todayWeatherInfo__texts}>
        <p className={s.todayWeatherInfo__text_1}>
          {temperature}° - ощущается как {feelsLike}°
        </p>
        <p className={s.todayWeatherInfo__text_2}>
          {props.pressure} мм ртутного столба
        </p>
        <p className={s.todayWeatherInfo__text_3}>Без осадков</p>
        <p className={s.todayWeatherInfo__text_4}>
          {props.wind} м/с юго-запад - легкий ветер
        </p>
      </div>
    </div>
  );
};

export default TodayWeatherInfo;
