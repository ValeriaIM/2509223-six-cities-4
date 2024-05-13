import PlaceCard from '../../components/place_card/place_card';
import FavoriteLocation from '../../components/favorite_location';

function Favorite(): JSX.Element {
  const favoritesLocations = {
    'Amsterdam': [
      <PlaceCard
        key="amsterdam-1"
        isPremium
        images = "img/apartment-small-03.jpg"
        price = {180}
        isFavorite
        title = "Nice, cozy, warm big bed apartment"
        type = "Apartment"
      />,

      <PlaceCard
        key="amsterdam-2"
        isPremium={false}
        images = "img/room-small.jpg"
        price = {80}
        isFavorite
        title = "Wood and stone place"
        type = "Room"
      />,
    ],
    'Cologne': [
      <PlaceCard
        key="cologne-1"
        isPremium={false}
        images = "img/apartment-small-04.jpg"
        price = {180}
        isFavorite
        title = "White castle"
        type = "Apartment"
      />,
    ],
  };

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(favoritesLocations).map(([location, placeCards]) => (
              <FavoriteLocation key={location} location={[location, placeCards]} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorite;
