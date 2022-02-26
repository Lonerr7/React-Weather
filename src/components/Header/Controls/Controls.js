import s from './Controls.module.scss';
import Select from 'react-select';
import raindrop from '../../../assets/images/header/raindrop.svg';

const Controls = () => {
  const options = [
    { value: 'Минск', label: 'Минск' },
    { value: 'Киев', label: 'Киев' },
    { value: 'Берлин', label: 'Берлин' },
    { value: 'Вашингтон', label: 'Вашингтон' },
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
    }),
  };

  return (
    <div className={s.controls}>
      <div className={s.controls__imgBox}>
        <img className={s.controls__img} src={raindrop} alt="raindrop" />
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
