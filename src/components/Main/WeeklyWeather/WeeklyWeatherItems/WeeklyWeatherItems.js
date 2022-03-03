import s from './WeeklyWeatherItems.module.scss';
import WeeklyWeatherItem from './WeeklyWeatherItem/WeeklyWeatherItem';
import { connect } from 'react-redux';

const WeeklyWeatherItems = (props) => {
  const weeklyWeatherElems = props.weatherArr.map((w) => (
    <WeeklyWeatherItem
      key={w.dt}
      icon={w.weather[0].icon}
      tempDay={w.temp.day}
      tempNight={w.temp.night}
      weatherDescr={w.weather[0].description}
      timeStamp={w.dt}
    />
  ));

  return <div className={s.weeklyWeatherItems}>{weeklyWeatherElems}</div>;
};

const mapStateToProps = (state) => ({
  weatherArr: state.weeklyWeather.weatherArr,
});

export default connect(mapStateToProps)(WeeklyWeatherItems);
