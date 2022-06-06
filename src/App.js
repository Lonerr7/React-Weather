import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Container from './components/common/Container/Container';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {
  return (
    <div className="App">
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
