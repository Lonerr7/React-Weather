import s from './WeeklyWeatherItems.module.scss';
import { connect } from 'react-redux';
import WeeklyWeatherItemContainer from './WeeklyWeatherItem/WeeklyWeatherItemContainer/WeeklyWeatherItemContainer';
import { setCurrentPopupSuccess } from '../../../../redux/weeklyWeatherReducer';

const WeeklyWeatherItems = (props) => {
  const weeklyWeatherElems = props.weatherArr.map((w, i) => (
    <WeeklyWeatherItemContainer
      id={w.dt}
      key={i}
      icon={w.weather[0].icon}
      tempDay={w.temp.day}
      tempNight={w.temp.night}
      weatherDescr={w.weather[0].description}
      timeStamp={w.dt}
      setCurrentPopupSuccess={props.setCurrentPopupSuccess}
    />
  ));

  return (
    <div className={s.weeklyWeatherItems}>
      {weeklyWeatherElems}
      {/* {props.currentWeatherCard ? (
        <WeeklyWeatherPopupContainer currentWeatherCard={props.currentWeatherCard} />
      ) : null} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherArr: state.weeklyWeather.weatherArr,
  currentWeatherCard: state.weeklyWeather.currentWeatherCard,
});

const dispatchToProps = {
  setCurrentPopupSuccess,
};

export default connect(mapStateToProps, dispatchToProps)(WeeklyWeatherItems);
