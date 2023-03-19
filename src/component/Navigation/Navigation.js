import React from 'react';
import classes from './Navigation.module.scss';

function Navigation(props) {
  return (
    <div className={classes.Navigation}>
      <input
        className={classes.Search}
        type="search"
        placeholder="Search for a country..."
        list="countries_search"
        onChange={(e) => props.findCountry(e.target.value)}
      />

      <datalist id="countries_search">
        {props.nameCountries.map((e, i) => {
          return (
            <>
              <option value={e.common} key={i + 'cdn'}></option>
              <option value={e.official} key={'tred' + i}></option>
            </>
          );
        })}
      </datalist>

      <select onChange={(e) => props.sortByRegion(e.target.value)}>
        <option value="" select="true">
          Filter by region
        </option>
        {props.region.map((e, i) => {
          return (
            <option value={e} key={i + 'regs'}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Navigation;
