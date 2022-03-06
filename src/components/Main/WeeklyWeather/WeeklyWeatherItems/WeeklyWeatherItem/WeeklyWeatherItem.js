import s from './WeeklyWeatherItem.module.scss';

const WeeklyWeatherItem = (props) => {
  return (
    <div className={s.weeklyWeatherItem} onClick={() => {
      props.showPopupHandler(props.id);
    }}>
      <div className={s.weeklyWeatherItem__inner}>
        <p className={s.weeklyWeatherItem__day}>
          {props.weekDay.charAt(0).toUpperCase() + props.weekDay.slice(1)}
        </p>
        <p className={s.weeklyWeatherItem__dateMonth}>{props.dateMonth}</p>
        <div className={s.weeklyWeatherItem__imgBox}>
          <img
            className={s.weeklyWeatherItem__img}
            src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="conditionImg"
          />
        </div>
        <p className={s.weeklyWeatherItem__dayDegree}>{props.tempDay}°</p>
        <p className={s.weeklyWeatherItem__nightDegree}>{props.tempNight}°</p>
        <p className={s.weeklyWeatherItem__weatherCondition}>
          {props.capitalizedWeatherDescr}
        </p>
      </div>
    </div>
  );
};

export default WeeklyWeatherItem;
