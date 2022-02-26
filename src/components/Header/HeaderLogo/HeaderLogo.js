import s from './HeaderLogo.module.scss';
import logo from '../../../assets/images/header/logo.svg';

const HeaderLogo = () => {
  return (
    <a className={s.headerLogo} href="/">
      <div className={s.headerLogo__logoBox}>
        <img src={logo} alt="logo" className={s.headerLogo__logo} />
      </div>
      <p className={s.headerLogo__text}>React weather</p>
    </a>
  );
};

export default HeaderLogo;
