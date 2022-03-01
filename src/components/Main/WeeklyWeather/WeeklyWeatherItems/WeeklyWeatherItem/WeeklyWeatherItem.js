import s from './WeeklyWeatherItem.module.scss';

const WeeklyWeatherItem = () => {
  return (
    <div className={s.weeklyWeatherItem}>
      <div className={s.weeklyWeatherItem__inner}>
        <p className={s.weeklyWeatherItem__day}>Сегодня</p>
        <p className={s.weeklyWeatherItem__dateMonth}>28 августа</p>
        <div className={s.weeklyWeatherItem__imgBox}>
          <img className={s.weeklyWeatherItem__img} src="" alt="conditionImg" />
        </div>
        <p className={s.weeklyWeatherItem__dayDegree}>+18°</p>
        <p className={s.weeklyWeatherItem__nightDegree}>+15°</p>
        <p className={s.weeklyWeatherItem__weatherCondition}>Облачно</p>
      </div>
    </div>
  )
}

export default WeeklyWeatherItem