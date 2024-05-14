import PlaceCard from "../../components/place_card/place_card";
import ReviewNew from "../../components/review_new";

type OfferProps = {
    key?: string;
    paths_gallery: string[];
    isPremium: boolean;
    name: string;    
    isFavorite: boolean;
    rating: number;
    features: Features;
    price: number;
    inside: string[];
    host: JSX.Element[];
    reviews: JSX.Element[][];
    otherCards: JSX.Element[];
}

type Features = {
    entire: string;
    bedrooms: string;
    adults: string;
}


function Offer(offerProps:OfferProps): JSX.Element {
    return (
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offerProps.paths_gallery[0]}
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offerProps.paths_gallery[1]}
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offerProps.paths_gallery[2]}
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offerProps.paths_gallery[3]}
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offerProps.paths_gallery[4]}
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offerProps.paths_gallery[5]}
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerProps.isPremium ? <div className="offer__mark"><span>Premium</span></div> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerProps.name}
                </h1>
                {offerProps.isFavorite ? 
                    <button key='bookmark' className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                    </button> : 
                    <button className="offer__bookmark-button button" type="button">
                        <svg className="offer__bookmark-icon" width={31} height={33}>
                            <use xlinkHref="#icon-bookmark" />
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                    </button>
                }                
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerProps.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerProps.features.entire}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerProps.features.bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {offerProps.features.adults}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offerProps.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerProps.inside.map((item) => <li className="offer__inside-item">{item}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                {offerProps.host}
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{offerProps.reviews.length}</span>
                </h2>
                <ul className="reviews__list">
                  {offerProps.reviews.map((review) => <li className="reviews__item">{review}</li>)}
                </ul>
                <ReviewNew />
              </section>
            </div>
          </div>
          <section className="offer__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offerProps.otherCards.map((otherCard: JSX.Element) => otherCard)}
            </div>
          </section>
        </div>
      </main>
    );
  }
  
  export default Offer;
  