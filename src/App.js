import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Container from './components/common/Container/Container';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import WeeklyWeatherPopupContainer from './components/Main/WeeklyWeather/WeeklyWeatherPopup/WeeklyWeatherPopupContainer/WeeklyWeatherPopupContainer';

const App = (props) => {
  return (
    <div className="App">
      {/* {props.currentWeatherCard ? (
        <WeeklyWeatherPopupContainer
          currentWeatherCard={props.currentWeatherCard}
        />
      ) : null} */}
      <BrowserRouter>
        <Container>
          <Header />
          <Main />
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
