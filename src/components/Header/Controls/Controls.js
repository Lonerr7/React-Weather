import s from './Controls.module.scss';
import Select from 'react-select';
import raindrop from '../../../assets/images/header/raindrop.svg';

const Controls = (props) => {
  return (
    <div className={s.controls}>
      <div className={s.controls__imgBox}>
        <img
          className={s.controls__img}
          src={raindrop}
          alt="raindrop"
          onClick={props.changeThemeHandler}
        />
      </div>
      <Select
        options={props.options}
        styles={props.customStyles}
        placeholder="Выбрать город"
        isClearable
        isSearchable={false}
        value={props.selectValue}
        onChange={props.setSelectValue}
      />
    </div>
  );
};

export default Controls;
