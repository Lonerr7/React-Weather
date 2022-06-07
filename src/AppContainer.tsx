import { useEffect } from 'react';
import App from './App';
import { useAppSelector } from './hooks/hooks';

const AppContainer: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    // eslint-disable-next-line
  }, []);

  return <App />;
};

export default AppContainer;
