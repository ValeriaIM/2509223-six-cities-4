import Review from '../../components/review';
import Host from '../../components/offer_host';
import Offer from './offer';
import { CityName, InsideObject } from '../../const';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Place_Cards } from '../../components/place_card/place_cards';

export const offers = {
  [CityName.Amsterdam]: [
    <Offer
      key="amsterdam-1"
      paths_gallery={['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg']}
      isPremium
      name='Beautiful &amp; luxurious studio at great location'    
      isFavorite
      rating={4.8}
      features={{entire:'Apartment', bedrooms:'3 Bedrooms', adults:'Max 4 adults'}}
      price = {180}
      inside={[
        InsideObject.WiFi, 
        InsideObject.WashingMachine, 
        InsideObject.Towels, 
        InsideObject.Heating, 
        InsideObject.CoffeeMachine, 
        InsideObject.BabySeat, 
        InsideObject.Kitchen, 
        InsideObject.Dishwasher,
        InsideObject.CabelTV,
        InsideObject.Fridge
      ]}
      host={[<Host
        user={{
          avatarImage: 'img/avatar-angelina.jpg',
          name: 'Angelina',
          isPro: true,
        }}
        textComment={[
          'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
          'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
        ]}
      />]}
      reviews={[
        [<Review
          user={{
            avatarImage: 'img/avatar-max.jpg',
            name: 'Max'
          }}
          textComment="A quiet cozy and picturesque that hides behind a a river
          by the unique lightness of Amsterdam. The building is
          green and from 18th century."
          time="April 2019"
        />],
      ]}
      otherCards={[
        Place_Cards[CityName.Amsterdam][0],
        Place_Cards[CityName.Amsterdam][1],
        Place_Cards[CityName.Amsterdam][2],
      ]}
    />,

    <Offer
      key="amsterdam-2"
      paths_gallery={['img/room-small.jpg', 'img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg']}
      isPremium={false}
      name='Wood and stone place'    
      isFavorite
      rating={4.2}
      features={{entire:'Room', bedrooms:'1 Bedroom', adults:'Max 2 adults'}}
      price = {80}
      inside={[
        InsideObject.WiFi,
        InsideObject.Towels, 
        InsideObject.Heating,
        InsideObject.CoffeeMachine, 
        InsideObject.Kitchen,
        InsideObject.CabelTV,
        InsideObject.Fridge
      ]}
      host={[<Host
        user={{
          avatarImage: 'img/avatar-max.jpg',
          name: 'Max',
          isPro: true,
        }}
        textComment={[
          'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
          'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
        ]}
      />]}
      reviews={[
        [<Review
          user={{
            avatarImage: 'img/avatar-angelina.jpg',
            name: 'Angelina'
          }}
          textComment="A quiet cozy and picturesque that hides behind a a river
          by the unique lightness of Amsterdam. The building is
          green and from 18th century."
          time="April 2020"
        />],
      ]}
      otherCards={[
        Place_Cards[CityName.Amsterdam][0],
        Place_Cards[CityName.Amsterdam][1],
        Place_Cards[CityName.Amsterdam][2],
      ]}
    />,

    <Offer
      key="amsterdam-3"
      paths_gallery={['img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg']}
      isPremium={false}
      name='Wood and stone place'    
      isFavorite
      rating={4.5}
      features={{entire:'Room', bedrooms:'1 Bedroom', adults:'Max 2 adults'}}
      price = {100}
      inside={[
        InsideObject.WiFi,
        InsideObject.Towels, 
        InsideObject.Heating,
        InsideObject.CoffeeMachine, 
        InsideObject.Kitchen,
        InsideObject.CabelTV,
        InsideObject.Fridge,
        InsideObject.Dishwasher,
        InsideObject.Parking
      ]}
      host={[<Host
        user={{
          avatarImage: 'img/avatar-max.jpg',
          name: 'Max',
          isPro: true,
        }}
        textComment={[
          'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
          'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
        ]}
      />]}
      reviews={[
      ]}
      otherCards={[
        Place_Cards[CityName.Amsterdam][0],
        Place_Cards[CityName.Amsterdam][1],
        Place_Cards[CityName.Amsterdam][2],
      ]}
    />,
  ],
  [CityName.Cologne]: [
    <Offer
      key="cologne-1"
      paths_gallery={['img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg']}
      isPremium
      name='White castle'    
      isFavorite
      rating={4.7}
      features={{entire:'Apartment', bedrooms:'2 Bedrooms', adults:'Max 3 adults'}}
      price = {180}
      inside={[
        InsideObject.WiFi,
        InsideObject.Towels, 
        InsideObject.Heating,
        InsideObject.CoffeeMachine, 
        InsideObject.Kitchen,
        InsideObject.CabelTV,
        InsideObject.Fridge,
        InsideObject.Dishwasher,
        InsideObject.Parking
      ]}
      host={[<Host
        user={{
          avatarImage: 'img/avatar-max.jpg',
          name: 'Max',
          isPro: true,
        }}
        textComment={[
          'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
          'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
        ]}
      />]}
      reviews={[
        [<Review
          user={{
            avatarImage: 'img/avatar-angelina.jpg',
            name: 'Angelina'
          }}
          textComment="A quiet cozy and picturesque that hides behind a a river
          by the unique lightness of Amsterdam. The building is
          green and from 18th century."
          time="April 2020"
        />],
        [<Review
          user={{
            avatarImage: 'img/avatar-max.jpg',
          name: 'Max',
          }}
          textComment="A quiet cozy and picturesque that hides behind a a river
          by the unique lightness of Amsterdam. The building is
          green and from 18th century."
          time="April 2022"
        />],
      ]}
      otherCards={[
        Place_Cards[CityName.Amsterdam][0],
        Place_Cards[CityName.Amsterdam][1],
        Place_Cards[CityName.Amsterdam][2],
      ]}
    />,
  ],
  [CityName.Dusseldorf]: [
    
  ],
  [CityName.Brussels]: [
    
  ],
  [CityName.Hamburg]: [
    
  ],
  [CityName.Paris]: [
    
  ]
};

function Offers(): JSX.Element {
  const { cardKey } = useParams<{ cardKey: string }>();
  console.log(cardKey)
  if (cardKey === undefined) {
    return <Fragment>{offers[CityName.Amsterdam][0]}</Fragment>;
  }

  const [cityString, indexString] = cardKey.split('_');
  const city: CityName = CityName[cityString as keyof typeof CityName];
  const index: number = parseInt(indexString);

  console.log(cityString)
  console.log(indexString)
  console.log(city)
  console.log(index)
  return <Fragment>{offers[city][index - 1]}</Fragment>;
}

export default Offers;
