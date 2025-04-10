import React, {useEffect, useState} from 'react';
import styles from './MainTicket.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {asyncThunkTikets} from '../../thunk/thunkTickets';
import {Empty} from 'antd';
import {Ticket} from './Ticket';
import {Spinner} from '../../assets/Spinner';

export const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticketsReduser.tickets);
  const isLoading = useSelector((state) => state.ticketsReduser.loading);
  const filterTickets = useSelector((state) => state.ticketsReduser.filterTickets);
  const isFiltered = useSelector((state) => state.ticketsReduser.isFiltered);
  const {emptyData} = useSelector((state) => state.errorReduser);

  // Состояние для управления количеством отображаемых билетов
  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5);

  useEffect(() => {
    dispatch(asyncThunkTikets());
  }, [dispatch]);

  const pending = isLoading ? <Spinner /> : null;

  // Определяем, какие билеты отображать в зависимости от фильтрации и количества видимых билетов
  const flatState = isFiltered ? filterTickets.flat() : tickets.flat();
  const displayedTickets = flatState.slice(0, visibleTicketsCount);

  const ticketsList =
    !isLoading && emptyData.isEmpty ? (
      <Empty description="Билетов нет" />
    ) : (
      displayedTickets.map((item) => {
        const id = `${item.segments[0].origin}-${item.segments[0].destination}-${item.segments[0].date}`;
        return <Ticket key={id} {...item} />;
      })
    );

  // Функция для загрузки дополнительных билетов
  const loadMoreTickets = () => {
    setVisibleTicketsCount((prevCount) => prevCount + 5);
  };

  return (
    <>
      <ul className={styles.tickets_list}>
        {pending}
        {ticketsList}
      </ul>
      {/* Кнопка для загрузки дополнительных билетов */}
      {!isLoading && !emptyData.isEmpty && (
        <button onClick={loadMoreTickets} className={styles.show_more}>
          Показать еще
        </button>
      )}
    </>
  );
};
