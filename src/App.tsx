import './App.scss';
import Container from './components/common/Container/Container';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />
      </Container>
    </div>
  );
};

export default App;
