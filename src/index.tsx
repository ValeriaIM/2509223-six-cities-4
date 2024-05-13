import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CityName } from './const';
import { offers } from './pages/offer/offers';
import { Place_Cards } from './components/place_card/place_cards';

const cities:string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const Setting = {
  countPlaces: 5,
  activeCityId: 3,

  currentPage: 'main',
  currentCity: CityName.Amsterdam,
  isNeedingFooter: false,

  isMain: true,
  wasLogin: true, //'-1' - не зашел, '0' - заходит, '1' - зашел
  email: 'Oliver.conner@gmail.com',
  favorite: 3,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      count_places={Setting.countPlaces}
      offers={offers}
      place_cards={Place_Cards}
      cities={cities}
      activeCityId={Setting.activeCityId}
      currentPage={Setting.currentPage}
      active_city={Setting.currentCity}
      isMain={Setting.isMain}
      wasLogin={Setting.wasLogin}
      email={Setting.email}
      favorite={Setting.favorite}
      isNeedingFooter={Setting.isNeedingFooter}
    />
  </React.StrictMode>
);
