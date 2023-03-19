import React from 'react';
import classes from './CountriesInfo.module.scss';
function CountriesInfo(props) {
  const languages = [];
  const currencies = [];
  const nativeName = [];

  for (let name of Object.values(props.name.nativeName)) {
    nativeName.push(name.official);
  }

  for (let curren of Object.values(props.currencies)) {
    currencies.push(curren.name);
  }

  for (let lang of Object.values(props.languages)) {
    languages.push(lang);
  }

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
              <span>Native name:</span> {nativeName.join(', ')}
            </li>
            <li>
              <span>Population:</span> {props.population}
            </li>
            <li>
              <span>Region:</span> {props.region}
            </li>
            <li>
              <span>Sub Region:</span> {props.subregion}
            </li>
            <li>
              <span>Capital:</span> {props.capital}
            </li>
            <li>
              <span>Top Level Domain:</span> {props.tld}
            </li>
            <li>
              <span>Curriencies:</span> {currencies.join(', ')}
            </li>
            <li>
              <span>Languages:</span> {languages.join(', ')}
            </li>
          </ul>
          {props.borders && (
            <div className={classes.borderCountriesContainer}>
              <span>Border Countries: </span>
              <div className={classes.buttonsBorder}>
                {props.borders.map((e) => {
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
          )}
        </div>
      </div>
    </div>
  );
}

export default CountriesInfo;
