import React from 'react';
import classes from './CountriesInfo.module.scss';
function CountriesInfo(props) {
  const languages = [];
  const currencies = [];
  const nativeName = [];
  console.log(languages, currencies, nativeName);
  if (props.name.nativeName) {
    for (let name of Object.values(props.name.nativeName)) {
      nativeName.push(name.official);
    }
  }

  if (props.currencies) {
    for (let curren of Object.values(props.currencies)) {
      currencies.push(curren.name);
    }
  }

  if (props.languages) {
    for (let lang of Object.values(props.languages)) {
      languages.push(lang);
    }
  }

  console.log(typeof nativeName.length);

  const clsBackButton = [classes.buttonBack];
  const clsBorderButton = [classes.borderCountry];

  if (!props.toggleTheme) {
    clsBackButton.push(classes.DarkTheme);
    clsBorderButton.push(classes.DarkTheme);
  }

  return (
    <div className={classes.infoCard}>
      <button className={clsBackButton.join(' ')} onClick={props.backToList}>
        Back
      </button>
      <div className={classes.CountriesInfo}>
        <div className={classes.Flag}>
          <img src={props.flags.svg} alt={`${props.name.common} flag`} />
        </div>
        <div className={classes.Info}>
          <h2>{props.name.official}</h2>
          <ul>
            {!!nativeName.length && (
              <li>
                <span>Native name:</span> {nativeName.join(', ')}
              </li>
            )}
            {props.population && (
              <li>
                <span>Population:</span> {props.population}
              </li>
            )}
            {props.region && (
              <li>
                <span>Region:</span> {props.region}
              </li>
            )}
            {props.subregion && (
              <li>
                <span>Sub Region:</span> {props.subregion}
              </li>
            )}
            {props.capital && (
              <li>
                <span>Capital:</span> {props.capital}
              </li>
            )}
            {props.tld && (
              <li>
                <span>Top Level Domain:</span> {props.tld}
              </li>
            )}
            {!!currencies.length && (
              <li>
                <span>Curriencies:</span> {currencies.join(', ')}
              </li>
            )}
            {!!languages.length && (
              <li>
                <span>Languages:</span> {languages.join(', ')}
              </li>
            )}
          </ul>
          {props.borders && (
            <div className={classes.borderCountriesContainer}>
              <span>Border Countries: </span>
              <div className={classes.buttonsBorder}>
                {props.borders.map((e) => {
                  return (
                    <button
                      className={clsBorderButton.join(' ')}
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
