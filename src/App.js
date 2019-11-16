import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BuildingMap from './components/BuildingMap';
import InfoPage from './components/InfoPage';

function App() {
  return (
    <Switch>
      <Route path="/info/:address" component={InfoPage} />

      <Route path="/test">
        <InfoPage />
      </Route>

      <Route path="/">
        <div>
          <BuildingMap />
        </div>
      </Route>

      <Redirect to="/" />
    </Switch>
  );
}

export default App;
