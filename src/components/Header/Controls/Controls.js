import s from './Controls.module.scss';
import Select from 'react-select';
import raindrop from '../../../assets/images/header/raindrop.svg';

const Controls = (props) => {
  const options = [
    { value: 'mogilev', label: 'Могилев' },
    { value: 'minsk', label: 'Минск' },
    { value: 'kyiv', label: 'Киев' },
    { value: 'berlin', label: 'Берлин' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--select-bg-color)',
      color: 'var(--text-color)',
      borderRadius: '10px',
      cursor: 'pointer',
    }),
    option: (provided) => ({
      ...provided,
      zIndex: 100,
      cursor: 'pointer',
      backgroundColor: 'var(--elems-big-color)',
      color: 'var(--text-color)',
    }),
  };

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
        options={options}
        styles={customStyles}
        placeholder="Выбрать город"
        isClearable
        isSearchable={false}
      />
    </div>
  );
};

export default Controls;
