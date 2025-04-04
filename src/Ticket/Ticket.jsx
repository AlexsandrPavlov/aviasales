import styles from './Ticket.module.scss';

export const Ticket = () => {
  return (
    <div className={styles.ticketBox}>
      <div className={styles.ticketBox__title}>
        <p>14 500 Р</p>
        <img src="src/Ticket/S7Logo.svg" width={110} height={40}></img>
      </div>
      <div className={styles.ticketBox__info}>
        <section>
          <p className={styles.ticketBox__info_title}>MOW – HKT</p>
          <p className={styles.ticketBox__info_about}>10:45 – 08:00</p>
        </section>
        <section>
          <p className={styles.ticketBox__info_title}>в пути</p>
          <p className={styles.ticketBox__info_about}>21ч 15м</p>
        </section>
        <section>
          <p className={styles.ticketBox__info_title}>2 пересадки</p>
          <p className={styles.ticketBox__info_about}>HKG, JNB</p>
        </section>
      </div>
      <div className={styles.ticketBox__info}>
        <section>
          <p className={styles.ticketBox__info_title}>MOW – HKT</p>
          <p className={styles.ticketBox__info_about}>10:45 – 08:00</p>
        </section>
        <section>
          <p className={styles.ticketBox__info_title}>в пути</p>
          <p className={styles.ticketBox__info_about}>21ч 15м</p>
        </section>
        <section>
          <p className={styles.ticketBox__info_title}>1 пересадка</p>
          <p className={styles.ticketBox__info_about}>HKG</p>
        </section>
      </div>
    </div>
  );
};
