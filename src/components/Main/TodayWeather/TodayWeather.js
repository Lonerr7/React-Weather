import s from './TodayWeather.module.scss';
import TodayWeatherInfo from './TodayWeatherInfo/TodayWeatherInfo';
import TodayWeatherSm from './TodayWeatherSm/TodayWeatherSm';

const TodayWeather = (props) => {
  return (
    <div className={s.todayWeather}>
      <div className={s.todayWeather__inner}>
        <TodayWeatherSm
          temp={props.weatherInfo.main.temp}
          cityName={props.weatherInfo.name}
          iconId={props.weatherInfo.weather[0].icon}
        />
        <TodayWeatherInfo
          temp={props.weatherInfo.main.temp}
          feelsLike={props.weatherInfo.main.feels_like}
          pressure={props.weatherInfo.main.pressure}
          wind={props.weatherInfo.wind.speed}
        />
      </div>
    </div>
  );
};

export default TodayWeather;
