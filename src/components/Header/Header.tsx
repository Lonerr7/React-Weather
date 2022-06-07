import ControlsContainer from './Controls/ControlsContainer/ControlsContainer';
import s from './Header.module.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <HeaderLogo />
      <ControlsContainer />
    </header>
  );
};

export default Header;
