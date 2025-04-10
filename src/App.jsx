import React from 'react';
import logo from './assets/Logo.svg';
import appStyles from './App.module.scss';
import {FilterBest} from './components/FilterBest/FilterBest';
import {TicketsList} from './components/TicketsList/TicketList';
import {FilterTransfer} from './components/FilterTransfer/FilterTransfer';

export function App() {
  return (
    <div className={appStyles.app}>
      <img src={logo} />
      <main className={appStyles.main}>
        <FilterBest />
        <FilterTransfer />
        <TicketsList />
      </main>
    </div>
  );
}
