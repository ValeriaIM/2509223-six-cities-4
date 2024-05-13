import MainEmpty from '../../pages/main/main_empty';
import Main from '../../pages/main/main';
import Favorite from '../../pages/favorites/favorites';
import Offers from '../../pages/offer/offers';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Login from '../../pages/login';
import React, { Fragment } from 'react';
import NotFound from '../../pages/404';
import { AppRoute, AuthorizationStatus, CityName } from '../../const';
import PrivateRoute from '../private_route';
import { PlaceCards } from '../place_card/place_cards';

type AppScreenProps = {
    count_places: number;
    offers: object;
    place_cards: PlaceCards;

    cities: string[];
    activeCityId: number;

    currentPage: string;
    active_city: CityName;
    isNeedingFooter: boolean;

    isMain: boolean;
    wasLogin: boolean;
    email?: string;

    favorite_cards: PlaceCards;
}

type AppScreenPropsSet = {
  appScreenProps: AppScreenProps;
  setIsMain: (value: boolean) => void;
  setWasLogin: (value: boolean) => void;
}

function GetMain(appScreenProps: AppScreenProps): JSX.Element {
  var count_places = appScreenProps.place_cards[appScreenProps.active_city].length;
  if (count_places > 0) {
    return (
      <Main
        count_places={count_places}
        place_cards={appScreenProps.place_cards}
        cities={appScreenProps.cities}
        active_city_id={appScreenProps.activeCityId}
        active_city={appScreenProps.active_city}
      />);
  }

  return (
    <MainEmpty
      count_places={count_places}
      cities={appScreenProps.cities}
      active_city_id={appScreenProps.activeCityId}
    />);
}

/*function GetFavorite(appScreenProps: AppScreenProps): JSX.Element | null {
  if (appScreenProps.favorite !== undefined) {
    if (appScreenProps.favorite > 0) {
      return <Favorite />;
    }
    return <FavoriteEmpty />;
  }
  return null;
}*/

function GetLogin(props: AppScreenPropsSet): JSX.Element {
  props.setIsMain(false);
  props.setWasLogin(false);
  return (
    <Login cities={props.appScreenProps.cities} active_city_id={props.appScreenProps.activeCityId}/>
  );
}

function App(appScreenProps: AppScreenProps): JSX.Element {
  const [isMain, setIsMain] = React.useState(appScreenProps.isMain);
  const [wasLogin, setWasLogin] = React.useState(appScreenProps.wasLogin);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout isMain={isMain} wasLogin={wasLogin} email={appScreenProps.email} favorite={appScreenProps.place_cards[appScreenProps.active_city].length} isNeedingFooter={appScreenProps.isNeedingFooter}/>}>
          <Route index element={GetMain(appScreenProps)} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Favorite favorite_cards={appScreenProps.favorite_cards}/></PrivateRoute>} />
          <Route path={AppRoute.Offer} element={<Offers wasLogin={appScreenProps.wasLogin} city={appScreenProps.active_city} index={0}/>} />
          <Route path={AppRoute.Login} element={<GetLogin appScreenProps={appScreenProps} setIsMain={setIsMain} setWasLogin={setWasLogin}/>} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
