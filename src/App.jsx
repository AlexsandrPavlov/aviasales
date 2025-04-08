import './App.scss';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Checkbox} from './Filters/Checkbox/Checkbox';
import {Sort} from './Filters/Sort/Sort';
import {Header} from './Header/Header';
import {TicketList} from './TicketList/TicketList';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <div className="appbox">
          <Checkbox />
          <div className="mainbox">
            <Sort />
            <TicketList />
          </div>
        </div>
      </>
    </Provider>
  );
}
