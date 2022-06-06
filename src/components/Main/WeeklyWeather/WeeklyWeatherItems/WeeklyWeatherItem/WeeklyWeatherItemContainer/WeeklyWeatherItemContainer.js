import { useDispatch } from 'react-redux';
import {
  createLocaleDateString,
  createTemperature,
} from '../../../../../../helpers/helpers';
import WeeklyWeatherItem from '../WeeklyWeatherItem';

const WeeklyWeatherItemContainer = (props) => {
  const dispatch = useDispatch();

  const tempDay = createTemperature(props.tempDay);
  const tempNight = createTemperature(props.tempNight);
  const capitalizedWeatherDescr =
    props.weatherDescr.charAt(0).toUpperCase() + props.weatherDescr.slice(1);

  const now = new Date(props.timeStamp * 1000);
  const options = { month: 'short', day: '2-digit' };
  const dateMonth = createLocaleDateString(now, 'ru-RU', options);
  const weekDay = createLocaleDateString(now, 'ru-RU', { weekday: 'short' });

  const showPopupHandler = (id) => {
    dispatch(props.setCurrentPopupSuccess(id));
  };

  return (
    <WeeklyWeatherItem
      weekDay={weekDay}
      dateMonth={dateMonth}
      tempDay={tempDay}
      tempNight={tempNight}
      capitalizedWeatherDescr={capitalizedWeatherDescr}
      icon={props.icon}
      showPopupHandler={showPopupHandler}
      id={props.id}
    />
  );
};

export default WeeklyWeatherItemContainer;
