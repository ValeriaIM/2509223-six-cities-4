type PlaceCardProps = {
    key?: string;
    isPremium: boolean;
    images: string;
    price: number;
    isFavorite: boolean;
    title: string;
    type: string;
}

function PlaceCard(placeCardProps: PlaceCardProps): JSX.Element {
  const mark: JSX.Element[] = [];
  if (placeCardProps.isPremium){
    mark.push(
      <div key='mark' className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }

  const bookmarkButton: JSX.Element[] = [];
  if (placeCardProps.isFavorite){
    bookmarkButton.push(
      <button key='bookmark' className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    );
  } else {
    bookmarkButton.push(
      <button key='bookmark' className="place-card__bookmark-button button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }

  return (
    <article className="cities__card place-card">
      {mark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={placeCardProps.images} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{placeCardProps.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {bookmarkButton}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{placeCardProps.title}</a>
        </h2>
        <p className="place-card__type">{placeCardProps.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
