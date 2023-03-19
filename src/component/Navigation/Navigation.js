import React from 'react';
import classes from './Navigation.module.scss';

function Navigation(props) {
  const clsInput = [classes.Search];

  if (!props.toggleTheme) {
    clsInput.push(classes.DarkTheme);
  }

  return (
    <div className={classes.Navigation}>
      <input
        className={clsInput.join(' ')}
        type="search"
        placeholder="Search for a country..."
        list="countries_search"
        onChange={(e) => props.findCountry(e.target.value)}
      />

      <select
        onChange={(e) => props.sortByRegion(e.target.value)}
        className={!props.toggleTheme && classes.DarkTheme}
      >
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
