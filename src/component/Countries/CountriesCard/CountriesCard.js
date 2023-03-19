import React from 'react';
import classes from './CountriesCard.module.scss';

function CountriesCard(props) {
  const cls = [classes.CountriesCard];
  if (!props.toggleTheme) {
    cls.push(classes.DarkTheme);
  }

  return (
    <div
      className={cls.join(' ')}
      onClick={() => props.selectCountry(props.cca3)}
    >
      <div className={classes.Flag}>
        <img src={props.flag} alt={`${props.name} flag`} />
      </div>
      <div className={classes.Info}>
        <h3>{props.name}</h3>
        <ul>
          <li>
            <span>Population:</span> {props.population}
          </li>
          <li>
            <span>Region:</span> {props.region}
          </li>
          <li>
            <span>Capital:</span> {props.capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountriesCard;
