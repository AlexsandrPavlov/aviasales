import React from 'react';

import WaysStyles from './MainTicket.module.scss';
import {getCurrentTime} from '../../assets/getCurrentTime';

export const Ways = ({origin, destination, duration, stops, date}) => {
  const countStops = stops.length;
  let id = [...stops].length;
  const time = new Date(date);
  const hours = time.getUTCHours().toString().padStart(2, '0');
  const minutes = time.getUTCMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes} — ${(parseInt(hours) + 1).toString().padStart(2, '0')}:${minutes}`;
  const wordForStops = countStops === 1 ? `${countStops} пересадка` : `${countStops} пересадки`;
  const stopsSpan = stops.map((item) => {
    return <span key={id--}>{item}</span>;
  });

  return (
    <section>
      <div>
        <span>
          {origin} – {destination}
        </span>
        <span> {formattedTime} </span>
      </div>
      <div>
        <span>В пути</span>
        <span>{getCurrentTime(duration)}</span>
      </div>
      <div>
        <span>{countStops === 0 ? 'Нет пересадок' : wordForStops}</span>
        <div className={WaysStyles.stops_style}>{stopsSpan}</div>
      </div>
    </section>
  );
};
