import MainEmpty from '../../pages/main/main_empty';
import Main from '../../pages/main/main';
import Favorite from '../../pages/favorites/favorites';
import Offers from '../../pages/offer/offers';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Login from '../../pages/login';
import React from 'react';
import NotFound from '../../pages/404';
import { AppRoute, AuthorizationStatus, CityName } from '../../const';
import PrivateRoute from '../private_route';

type AppScreenProps = {
    count_places: number;

    cities: string[];
    activeCityId: number;

    currentPage: string;
    currentCity: CityName;
    isNeedingFooter: boolean;

    isMain: boolean;
    wasLogin: boolean;
    email?: string;
    favorite?: number;
}

type AppScreenPropsSet = {
  appScreenProps: AppScreenProps;
  setIsMain: (value: boolean) => void;
  setWasLogin: (value: boolean) => void;
}

function GetMain(appScreenProps: AppScreenProps): JSX.Element {
  if (appScreenProps.count_places > 0) {
    return (
      <Main
        count_places={appScreenProps.count_places}
        cities={appScreenProps.cities}
        active_city_id={appScreenProps.activeCityId}
      />);
  }

  return (
    <MainEmpty
      count_places={appScreenProps.count_places}
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
        <Route path={AppRoute.Root} element={<Layout isMain={isMain} wasLogin={wasLogin} email={appScreenProps.email} favorite={appScreenProps.favorite} isNeedingFooter={appScreenProps.isNeedingFooter}/>}>
          <Route index element={GetMain(appScreenProps)} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Favorite /></PrivateRoute>} />
          <Route path={AppRoute.Offer} element={<Offers wasLogin={appScreenProps.wasLogin} city={appScreenProps.currentCity} index={0}/>} />
          <Route path={AppRoute.Login} element={<GetLogin appScreenProps={appScreenProps} setIsMain={setIsMain} setWasLogin={setWasLogin}/>} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
