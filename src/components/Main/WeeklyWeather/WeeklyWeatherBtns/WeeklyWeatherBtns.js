import { useDispatch } from 'react-redux';
import s from './WeeklyWeatherBtns.module.scss';

const WeeklyWeatherBtns = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={s.weeklyWeatherBtns}>
      <button
        className={
          !props.isActive
            ? `${s.weeklyWeatherBtns__btn} ${s.active}`
            : s.weeklyWeatherBtns__btn
        }
        onClick={() => {
          dispatch(props.setFilterSuccess('5-days'));
          dispatch(props.setIsActive(false));
        }}
      >
        На 5 дней
      </button>
      <button
        className={
          props.isActive
            ? `${s.weeklyWeatherBtns__btn} ${s.active}`
            : s.weeklyWeatherBtns__btn
        }
        onClick={() => {
          dispatch(props.setFilterSuccess('7-days'));
          dispatch(props.setIsActive(true));
        }}
      >
        На неделю
      </button>
    </div>
  );
};

export default WeeklyWeatherBtns;
