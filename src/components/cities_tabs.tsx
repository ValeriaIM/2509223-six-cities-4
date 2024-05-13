type CitiesTabsProps = {
    cities: string[];
    activeCityId: number;
}

function CitiesTabs({cities, activeCityId}: CitiesTabsProps): JSX.Element {
  const locations = [];
  for (let i = 0; i < cities.length; i++) {
    locations.push(
      <li key={i} className="locations__item">
        {i !== activeCityId && (
          <a className="locations__item-link tabs__item" href="#"><span>{cities[i]}</span></a>
        )}
        {i === activeCityId && (
          <a className="locations__item-link tabs__item tabs__item--active" href="#"><span>{cities[i]}</span></a>
        )}
      </li>);
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
