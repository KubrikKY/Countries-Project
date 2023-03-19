import classes from './App.module.scss';
import Header from './component/Header/Header';
import Navigation from './component/Navigation/Navigation';
import CountriesList from './component/Countries/CountriesList/CountriesList';
import CountriesInfo from './component/Countries/CountriesInfo/CountriesInfo';

import { useState, useEffect } from 'react';

function App() {
  const [contriesList, setCountriesList] = useState([]);
  const [showsCountries, setShowsCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectCountries, setSelectCountries] = useState(null);
  const [toggleTheme, setToggleTheme] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((responce) => responce.json())
      .then((data) => {
        setCountriesList(data);
        setShowsCountries(data);
        setRegions(Array.from(new Set(data.map((e) => e.region))));
      });
  }, []);

  const setThemeHandler = () => {
    setToggleTheme(!toggleTheme);
  };

  const findCountry = (value) => {
    const findContriesList = contriesList.filter(
      ({ name }) =>
        name.common.toLowerCase().includes(value.toLowerCase()) ||
        name.official.toLowerCase().includes(value.toLowerCase())
    );
    setShowsCountries(findContriesList);
  };

  const selectCountriesHandler = (cca3Elem) => {
    const Country = contriesList.find((e) => e.cca3 === cca3Elem);
    setSelectCountries(Country);
  };

  const sortByRegionHandler = (regionValue) => {
    if (regionValue) {
      const sortContriesList = contriesList.filter(
        (e) => e.region === regionValue
      );
      setShowsCountries(sortContriesList);
      return;
    }
    setShowsCountries([...contriesList]);
  };

  const cls = [classes.App];

  if (!toggleTheme) {
    cls.push(classes.darkTheme);
  }

  return (
    <div className={cls.join(' ')}>
      <Header toggleNightMode={toggleTheme} setTheme={setThemeHandler} />
      {!selectCountries ? (
        <>
          <Navigation
            region={regions}
            sortByRegion={(value) => sortByRegionHandler(value)}
            findCountry={(value) => findCountry(value)}
            toggleTheme={toggleTheme}
          />

          <CountriesList
            countries={showsCountries}
            selectCountries={(ciocElem) => selectCountriesHandler(ciocElem)}
            toggleTheme={toggleTheme}
          />
        </>
      ) : (
        <CountriesInfo
          {...selectCountries}
          backToList={() => selectCountriesHandler(null)}
          toggleTheme={toggleTheme}
          selectBorderCountries={(cca3) => selectCountriesHandler(cca3)}
          borderName={contriesList.reduce((obj, e) => {
            obj[e.cca3] = e.name.common;
            return obj;
          }, {})}
        />
      )}
    </div>
  );
}

export default App;
