import React from 'react';
import classes from './CountriesInfo.module.scss';
function CountriesInfo(props) {
  return (
    <div className={classes.infoCard}>
      <button className={classes.buttonBack} onClick={props.backToList}>
        Back
      </button>
      <div className={classes.CountriesInfo}>
        <div className={classes.Flag}>
          <img src={props.flags.svg} alt={`${props.name.common} flag`} />
        </div>
        <div className={classes.Info}>
          <h2>{props.name.official}</h2>
          <ul>
            <li>
              <span>Native name:</span> {props.capital}
            </li>
            <li>
              <span>Population:</span> {props.population}
            </li>
            <li>
              <span>Region:</span> {props.region}
            </li>
            <li>
              <span>Sub Region:</span> {props.capital}
            </li>
            <li>
              <span>Capital:</span> {props.capital}
            </li>
            <li>
              <span>Top Level Domain:</span> {props.capital}
            </li>
            <li>
              <span>Curriencies:</span> {props.capital}
            </li>
            <li>
              <span>Languages:</span> {props.capital}
            </li>
          </ul>
          <div className={classes.borderCountriesContainer}>
            <span>Border Countries: </span>

            {props.borders &&
              props.borders.map((e) => {
                return (
                  <button
                    className={classes.borderCountry}
                    value={e}
                    key={12 + e}
                    onClick={() => props.selectBorderCountries(e)}
                  >
                    {props.borderName[e]}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesInfo;
