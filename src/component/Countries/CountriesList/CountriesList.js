import React from 'react';
import CountriesCard from '../CountriesCard/CountriesCard';
import classes from './CountriesList.module.scss';

function CountriesList(props) {
  return (
    <div className={classes.CountriesList}>
      {props.countries.map((e, i) => {
        return (
          <CountriesCard
            key={i}
            flag={e.flags.svg}
            name={e.name.common}
            population={e.population}
            region={e.region}
            capital={e.capital}
            selectCountry={(countryInfo) => props.selectCountries(countryInfo)}
            cca3={e.cca3}
            toggleTheme={props.toggleTheme}
          />
        );
      })}
    </div>
  );
}

export default CountriesList;
