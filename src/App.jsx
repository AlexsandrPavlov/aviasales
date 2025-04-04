import './App.scss';
import {Checkbox} from './Filters/Checkbox/Checkbox';
import {Sort} from './Filters/Sort/Sort';
import {Header} from './Header/Header';
import {TicketList} from './TicketList/TicketList';

export default function App() {
  return (
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
  );
}
