import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Checkbox.module.scss';

export const Checkbox = () => {
  const dispatch = useDispatch();
  const checkedList = useSelector((state) => state.filters.checkedList);

  const handleToggleFilter = (id) => {
    if (id === 'all') {
      const isAllChecked = checkedList.find((filter) => filter.id === 'all').checked;
      dispatch({type: 'TOGGLE_ALL_FILTERS', payload: !isAllChecked});
    } else {
      dispatch({type: 'TOGGLE_FILTER', payload: id});
    }
  };

  return (
    <div className={styles.filterBox}>
      <h2 className={styles.filterBox__title}>Количество пересадок</h2>
      <div className={styles.filterBox__checkboxWrapper}>
        {checkedList.map((filter) => (
          <label key={filter.id} className={styles.filterBox__checkbox}>
            <input
              type="checkbox"
              className={styles.checkboxInput}
              checked={filter.checked}
              onChange={() => handleToggleFilter(filter.id)}
            />
            <span className={styles.filterBox__checkboxCheckmark} />
            {filter.title}
          </label>
        ))}
      </div>
    </div>
  );
};
