import React from 'react';
import classes from './Header.module.scss';

function Header(props) {
  const iconSrc = props.toggleNightMode
    ? './icon/darkTheme.png'
    : './icon/lightTheme.png';

  const cls = [classes.Header];

  if (!props.toggleNightMode) {
    cls.push(classes.darkTheme);
  }

  return (
    <div className={cls.join(' ')}>
      <h1>Where in the world?</h1>
      <div onClick={props.setTheme} className={classes.toggleTheme}>
        <img src={iconSrc} alt="Mode Toggle" />
        {props.toggleNightMode ? <h2>Dark Mode</h2> : <h2>Light Mode</h2>}
      </div>
    </div>
  );
}

export default Header;
