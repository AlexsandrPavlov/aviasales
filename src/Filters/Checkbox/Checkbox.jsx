import React from 'react';
import styles from './Checkbox.module.scss';

export const Checkbox = () => {
  return (
    <div className={styles.filterBox}>
      <h2 className={styles.filterBox__title}>Количество пересадок</h2>
      <div className={styles.filterBox__checkboxWrapper}>
        <label className={styles.filterBox__checkbox}>
          <input type="checkbox" className={styles.checkboxInput} />
          <span className={styles.filterBox__checkboxCheckmark} />
          Все
        </label>
        <label className={styles.filterBox__checkbox}>
          <input type="checkbox" className={styles.checkboxInput} />
          <span className={styles.filterBox__checkboxCheckmark} />
          Без пересадок
        </label>
        <label className={styles.filterBox__checkbox}>
          <input type="checkbox" className={styles.checkboxInput} />
          <span className={styles.filterBox__checkboxCheckmark} />1 пересадка
        </label>
        <label className={styles.filterBox__checkbox}>
          <input type="checkbox" className={styles.checkboxInput} />
          <span className={styles.filterBox__checkboxCheckmark} />2 пересадки
        </label>
        <label className={styles.filterBox__checkbox}>
          <input type="checkbox" className={styles.checkboxInput} />
          <span className={styles.filterBox__checkboxCheckmark} />3 пересадки
        </label>
      </div>
    </div>
  );
};
