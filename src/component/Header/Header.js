import React from 'react';
import classes from './Header.module.scss';

function Header(props) {
  return (
    <div className={classes.Header}>
      <h1>Where in the world?</h1>
      <div>
        <img src="./" alt="Mode Toggle" />
        {props.toggleNightMode ? <h2>Dark Mode</h2> : <h2>Light Mode</h2>}
      </div>
    </div>
  );
}

export default Header;
