import { connect } from 'react-redux';
import WeeklyWeatherBtns from '../WeeklyWeatherBtns';
import {
  getWeather,
  setIsActiveBtnSucess,
} from '../../../../../redux/weatherReducer';
import {
  get7DayWeather,
  get5DayWeather,
} from '../../../../../redux/weeklyWeatherReducer';

const WeeklyWeatherBtnsContainer = (props) => {
  const get7DayWeatherHandler = () => {
    props.getWeather(props.currentCity, get7DayWeather);
  };

  // TODO: Сделать запрос за погодой только на 7 дней и тоглить их показ из редьюсера

  const get5DayWeatherHandler = () => {
    props.getWeather(props.currentCity, get5DayWeather);
  };

  return (
    <WeeklyWeatherBtns
      get7DayWeatherHandler={get7DayWeatherHandler}
      get5DayWeatherHandler={get5DayWeatherHandler}
      isActive={props.isActive}
      setIsActive={props.setIsActive}
    />
  );
};

const mapStateToProps = (state) => ({
  currentCity: state.app.currentCity,
  isActive: state.app.isActiveBtn,
});

const dispatchToProps = {
  getWeather,
  setIsActive: setIsActiveBtnSucess,
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(WeeklyWeatherBtnsContainer);
