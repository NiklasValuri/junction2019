import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BuildingMap from './components/BuildingMap';
import InfoPage from './components/InfoPage';

function App() {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/info/:address`} component={InfoPage} />

      <Route path={`${process.env.PUBLIC_URL}/test`} >
        <InfoPage />
      </Route>

      <Route path={`${process.env.PUBLIC_URL}/`} >
        <div>
          <BuildingMap />
        </div>
      </Route>

      <Redirect to={`${process.env.PUBLIC_URL}/`} />
    </Switch>
  );
}

export default App;
