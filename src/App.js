import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BuildingMap from './components/BuildingMap';
import InfoPage from './components/InfoPage';
import { data } from './db.js';

function App() {
  const [typed, setTyped] = useState('Search...');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setTyped(typed);
  }, []);

  const handleFilterChange = event => {
    setTyped(event.target.value);
    handleOptionChange(event);
  };

  const handleOptionChange = event => {
    const target = event.target.value;
    const newData =
      target === 0
        ? []
        : data.filter(x => !(x.lng === 0 || isNaN(x.lat) || x.lat <= 60 || x.lat > 60.4) && x.address.toLowerCase().startsWith(target.toLowerCase()));
    setOptions(newData);
  };

  return (
    <Switch>
      <Route path="/info/:id" component={InfoPage} />

      <Route path="/test">
        <InfoPage />
      </Route>

      <Route path="/">
        <div>
          <BuildingMap typed={typed} change={handleFilterChange} options={options} />
        </div>
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default App;
