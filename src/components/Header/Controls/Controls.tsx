import s from './Controls.module.scss';
import Select from 'react-select';
import raindrop from '../../../assets/images/header/raindrop.svg';
import { Cities } from '../../../types/types';

type ControlsProps = {
  changeThemeHandler: () => void;
  selectValue: {
    value: Cities;
    label: string;
  };
  setSelectValue: any;
  options: {
    value: Cities;
    label: string;
  }[];
  customStyles: any;
};

const Controls: React.FC<ControlsProps> = (props) => {
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
