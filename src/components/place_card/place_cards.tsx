import { CityName } from "../../const";
import PlaceCard from "./place_card";

export type PlaceCards = Record<CityName, JSX.Element[]>

export const Place_Cards: PlaceCards = {
    [CityName.Amsterdam]: [
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

      <PlaceCard
        key="amsterdam-3"
        isPremium={false}
        images = "img/room.jpg"
        price = {100}
        isFavorite
        title = "Wood and stone place"
        type = "Room"
      />,

      <PlaceCard
        key="amsterdam-4"
        isPremium={false}
        images = "img/apartment-02.jpg"
        price = {132}
        isFavorite = {false}
        title = "Canal View Prinsengracht"
        type = "Apartment"
      />,

      <PlaceCard
        key="amsterdam-5"
        isPremium
        images = "img/apartment-03.jpg"
        price = {180}
        isFavorite = {false}
        title = "Nice, cozy, warm big bed apartment"
        type = "Apartment"
      />,
    ],
    [CityName.Cologne]: [
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
    [CityName.Dusseldorf]: [
    
    ],
    [CityName.Brussels]: [
      
    ],
    [CityName.Hamburg]: [
      
    ],
    [CityName.Paris]: [
      
    ]
}