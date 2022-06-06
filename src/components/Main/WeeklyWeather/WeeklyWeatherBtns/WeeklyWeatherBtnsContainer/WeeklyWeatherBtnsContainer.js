import WeeklyWeatherBtns from '../WeeklyWeatherBtns';
import { useSelector } from 'react-redux';
import { setFilterSuccess } from '../../../../../redux/filtersSlice';
import { setIsActiveBtnSucess } from '../../../../../redux/weeklyWeatherSlice';

const WeeklyWeatherBtnsContainer = () => {
  const isActiveBtn = useSelector((state) => state.weeklyWeather.isActiveBtn);

  return (
    <WeeklyWeatherBtns
      isActive={isActiveBtn}
      setIsActive={setIsActiveBtnSucess}
      setFilterSuccess={setFilterSuccess}
    />
  );
};

export default WeeklyWeatherBtnsContainer;
