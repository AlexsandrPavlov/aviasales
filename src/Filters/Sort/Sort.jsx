import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Sort.module.scss';

export const Sort = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.filters.sortOption);

  const handleChange = (event) => {
    dispatch({type: 'SET_SORT_OPTION', payload: event.target.value});
  };

  return (
    <div className={styles.Sortbox}>
      <label className={`${styles.Sortbox__item} ${selectedOption === 'cheap' ? styles.selected : ''}`}>
        <input type="radio" value="cheap" name="sort" checked={selectedOption === 'cheap'} onChange={handleChange} />
        самый дешевый
      </label>
      <label className={`${styles.Sortbox__item} ${selectedOption === 'fast' ? styles.selected : ''}`}>
        <input type="radio" value="fast" name="sort" checked={selectedOption === 'fast'} onChange={handleChange} />
        самый быстрый
      </label>
      <label className={`${styles.Sortbox__item} ${selectedOption === 'optimal' ? styles.selected : ''}`}>
        <input
          type="radio"
          value="optimal"
          name="sort"
          checked={selectedOption === 'optimal'}
          onChange={handleChange}
        />
        оптимальный
      </label>
    </div>
  );
};
