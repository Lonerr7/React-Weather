import { connect } from 'react-redux';
import WeeklyWeatherBtns from '../WeeklyWeatherBtns';
import { setIsActiveBtnSucess } from '../../../../../redux/weatherReducer';
import {
  set5DayWeatherSuccess,
  get7DayWeatherSuccess,
} from '../../../../../redux/weeklyWeatherReducer';

const WeeklyWeatherBtnsContainer = (props) => {
  return (
    <WeeklyWeatherBtns
      get7DayWeatherHandler={props.get7DayWeatherSuccess}
      get5DayWeatherHandler={props.set5DayWeatherSuccess}
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
  set5DayWeatherSuccess,
  get7DayWeatherSuccess,
  setIsActive: setIsActiveBtnSucess,
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(WeeklyWeatherBtnsContainer);
