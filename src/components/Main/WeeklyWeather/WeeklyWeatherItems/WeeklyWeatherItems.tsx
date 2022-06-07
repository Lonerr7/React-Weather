import s from './WeeklyWeatherItems.module.scss';
import WeeklyWeatherItemContainer from './WeeklyWeatherItem/WeeklyWeatherItemContainer/WeeklyWeatherItemContainer';
import { setCurrentPopupSuccess } from '../../../../redux/weeklyWeatherSlice';
import WeeklyWeatherPopupContainer from '../WeeklyWeatherPopup/WeeklyWeatherPopupContainer/WeeklyWeatherPopupContainer';
import { selectWeatherItemsByFilter } from '../../../../redux/selectors';
import { useAppSelector } from '../../../../hooks/hooks';

const WeeklyWeatherItems: React.FC = () => {
  const weatherArr = useAppSelector(selectWeatherItemsByFilter);
  const currentWeatherCard = useAppSelector(
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
      setCurrentPopupSuccess={setCurrentPopupSuccess}
    />
  ));

  return (
    <div
      className={
        weatherArr.length
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

export default WeeklyWeatherItems;
