import s from './TodayWeatherInfoTitle.module.scss';

const TodayWeatherInfoTitle = (props) => {
  return (
    <div className={s.todayWeatherInfo__title}>
      <div className={s.todayWeatherInfo__imgBox}>
        <img
          className={s.todayWeatherInfo__img}
          src={props.imgSrc}
          alt={props.imgSrc}
        />
      </div>
      <p className={s.todayWeatherInfo__titleText}>{props.titleName}</p>
    </div>
  );
};

export default TodayWeatherInfoTitle;
