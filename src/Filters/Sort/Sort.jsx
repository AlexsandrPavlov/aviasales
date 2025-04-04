import React, {useState} from 'react';
import styles from './Sort.module.scss';

export const Sort = () => {
  const [selectedOption, setSelectedOption] = useState('cheap');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.Sortbox}>
      <label className={`${styles.Sortbox__item} ${selectedOption === 'cheap' ? styles.selected : ''}`}>
        <input type="radio" value="cheap" name="sort" onChange={handleChange} />
        самый дешевый
      </label>
      <label className={`${styles.Sortbox__item} ${selectedOption === 'fast' ? styles.selected : ''}`}>
        <input type="radio" value="fast" name="sort" onChange={handleChange} />
        самый быстрый
      </label>
      <label className={`${styles.Sortbox__item} ${selectedOption === 'optimal' ? styles.selected : ''}`}>
        <input type="radio" value="optimal" name="sort" onChange={handleChange} />
        оптимальный
      </label>
    </div>
  );
};
