import TodayWeatherInfoSm from '../../../common/TodayWeatherInfoSm/TodayWeatherInfoSm';
import s from './WeeklyWeatherPopup.module.scss';
import close from '../../../../assets/images/main/close.png';
import CurrentTime from '../../../common/CurrentTime/CurrentTime';

const WeeklyWeatherPopup = (props) => {
  return (
    <div className={s.weeklyWeatherPopup}>
      <div className={s.weeklyWeatherPopup__closeImgBox}>
        <img
          className={s.weeklyWeatherPopup__closeImg}
          src={close}
          alt="close"
          onClick={props.deleteCurrentPopupSuccess}
        />
      </div>
      <div className={s.weeklyWeatherPopup__todayWeather}>
        <div className={s.weeklyWeatherPopup__tempDayBox}>
          <p className={s.weeklyWeatherPopup__degree}>{props.temp}°</p>
          <p className={s.weeklyWeatherPopup__weekday}>{props.weekDay}</p>
        </div>
        <div>
          <div className={s.weeklyWeatherPopup__conditionImgBox}>
            <img
              className={s.weeklyWeatherPopup__conditionImg}
              src={`https://openweathermap.org/img/wn/${props.iconId}@2x.png`}
              alt="weather condition"
            ></img>
          </div>
          <CurrentTime classItem={s.weeklyWeatherPopup__time} />
          <p className={s.weeklyWeatherPopup__city}>
            Город: {props.currentCity}
          </p>
        </div>
      </div>
      <TodayWeatherInfoSm
        temp={props.temp}
        feelsLike={props.feelsLike}
        pressure={props.pressure}
        wind={props.wind}
      />
    </div>
  );
};

export default WeeklyWeatherPopup;
