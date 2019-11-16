import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import BuildingMap from './components/BuildingMap'
import InfoPage from './components/InfoPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  component={BuildingMap} />
        <Route path="/info/:address" component={InfoPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
