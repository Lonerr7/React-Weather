import WeeklyWeatherBtns from '../WeeklyWeatherBtns';
import { setFilterSuccess } from '../../../../../redux/filtersSlice';
import { setIsActiveBtnSucess } from '../../../../../redux/weeklyWeatherSlice';
import { useAppSelector } from '../../../../../hooks/hooks';

const WeeklyWeatherBtnsContainer: React.FC = () => {
  const isActiveBtn = useAppSelector(
    (state) => state.weeklyWeather.isActiveBtn
  );

  return (
    <WeeklyWeatherBtns
      isActive={isActiveBtn}
      setIsActive={setIsActiveBtnSucess}
      setFilterSuccess={setFilterSuccess}
    />
  );
};

export default WeeklyWeatherBtnsContainer;
