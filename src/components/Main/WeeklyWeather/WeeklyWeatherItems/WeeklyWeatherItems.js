import s from './WeeklyWeatherItems.module.scss';
import { useSelector } from 'react-redux';
import WeeklyWeatherItemContainer from './WeeklyWeatherItem/WeeklyWeatherItemContainer/WeeklyWeatherItemContainer';
import { setCurrentPopupSuccess } from '../../../../redux/weeklyWeatherReducer';
import WeeklyWeatherPopupContainer from '../WeeklyWeatherPopup/WeeklyWeatherPopupContainer/WeeklyWeatherPopupContainer';
import { selectWeatherItemsByFilter } from './../../../../redux/selectors';

const WeeklyWeatherItems = () => {
  const weatherArr = useSelector(selectWeatherItemsByFilter);
  const currentWeatherCard = useSelector(
    (state) => state.weeklyWeather.currentWeatherCard
  );

  const weeklyWeatherElems = weatherArr.map((w, i) => (
    <WeeklyWeatherItemContainer
      id={w.dt}
      key={i}
      icon={w.weather[0].icon}
      tempDay={w.temp.day}
      tempNight={w.temp.night}
      weatherDescr={w.weather[0].description}
      timeStamp={w.dt}
      // setCurrentPopupSuccess={props.setCurrentPopupSuccess}
    />
  ));

  return (
    <div
      className={
        weatherArr
          ? s.weeklyWeatherItems
          : `${s.weeklyWeatherItems} ${s.invisible}`
      }
    >
      {weeklyWeatherElems}
      {currentWeatherCard ? (
        <WeeklyWeatherPopupContainer currentWeatherCard={currentWeatherCard} />
      ) : null}
    </div>
  );
};

// const dispatchToProps = {
//   setCurrentPopupSuccess,
// };

export default WeeklyWeatherItems;
