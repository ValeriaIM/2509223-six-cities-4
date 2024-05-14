import { Link } from "react-router-dom";
import { AppRoute } from "../const";

type HeaderProps = {
    is_main: boolean;
    was_login: boolean;
    email?: string;
    favorite?: number;
}

function Header(headerProps: HeaderProps): JSX.Element {
  const nav = [];
  if (!headerProps.was_login && headerProps.is_main){
    nav.push(
      <nav key="no__login" className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  if (headerProps.was_login && headerProps.is_main){
    nav.push(
      <nav key="profile" className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{headerProps.email}</span>
              <span className="header__favorite-count">{headerProps.favorite}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Login}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {!headerProps.is_main &&
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>}
            {headerProps.is_main &&
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>}
          </div>
          {nav}
        </div>
      </div>
    </header>
  );
}

export default Header;
