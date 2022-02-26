import s from './TodayWeather.module.scss';
import TodayWeatherInfo from './TodayWeatherInfo/TodayWeatherInfo';
import TodayWeatherSm from './TodayWeatherSm/TodayWeatherSm';


const TodayWeather = () => {
  return (
    <div className={s.todayWeather}>
      <div className={s.todayWeather__inner}>
        <TodayWeatherSm />
        <TodayWeatherInfo />
      </div>
    </div>
  )
}

export default TodayWeather