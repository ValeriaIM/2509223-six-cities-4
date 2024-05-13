import FavoriteLocation from '../../components/favorite_location';
import { PlaceCards } from '../../components/place_card/place_cards';

type FavoriteProps = {
  favorite_cards: PlaceCards
}

function Favorite(favoriteProps: FavoriteProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(favoriteProps.favorite_cards).map(([location, placeCards]) => ( placeCards.length > 0 ?
              <FavoriteLocation key={location} location={[location, placeCards]}/> : <></>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorite;
