import Controls from './Controls/Controls';
import s from './Header.module.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';

const Header = () => {
  return (
    <header className={s.header}>
      <HeaderLogo />
      <Controls />
    </header>
  )
}

export default Header