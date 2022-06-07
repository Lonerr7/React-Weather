import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  createLocaleDateString,
  createTemperature,
} from '../../../../../../helpers/helpers';
import { useAppDispatch } from '../../../../../../hooks/hooks';
import WeeklyWeatherItem from '../WeeklyWeatherItem';

type WeeklyWeatherItemContainerProps = {
  id: number;
  icon: string;
  tempDay: number;
  tempNight: number;
  weatherDescr: string;
  timeStamp: number;
  setCurrentPopupSuccess: ActionCreatorWithPayload<number, string>;
};

const WeeklyWeatherItemContainer: React.FC<WeeklyWeatherItemContainerProps> = (
  props
) => {
  const dispatch = useAppDispatch();

  const tempDay = createTemperature(props.tempDay);
  const tempNight = createTemperature(props.tempNight);
  const capitalizedWeatherDescr =
    props.weatherDescr.charAt(0).toUpperCase() + props.weatherDescr.slice(1);

  const now = new Date(props.timeStamp * 1000);
  const options = { month: 'short', day: '2-digit' };
  const dateMonth = createLocaleDateString(now, 'ru-RU', options);
  const weekDay = createLocaleDateString(now, 'ru-RU', { weekday: 'short' });

  const showPopupHandler = (id: number) => {
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
