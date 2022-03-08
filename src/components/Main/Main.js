import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import s from './Main.module.scss';
import TodayWeather from './TodayWeather/TodayWeather';
import WeeklyWeather from './WeeklyWeather/WeeklyWeather';

const Main = (props) => {
  return (
    <main className={s.main}>
      {props.weatherInfo ? (
        <div className={s.main__inner}>
          <TodayWeather weatherInfo={props.weatherInfo} />
          <WeeklyWeather />
          
        </div>
      ) : (
        <Preloader />
      )}
    </main>
  );
};

const mapStateToProps = (state) => ({
  weatherInfo: state.app.weatherInfo,
});

export default connect(mapStateToProps)(Main);
