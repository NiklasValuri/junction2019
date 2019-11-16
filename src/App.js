import React, { Component } from 'react';
import { Button, Popup, Icon } from 'semantic-ui-react'
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import SmallPopup from './components/SmallPopup'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  component={SmallPopup} />
        <Route path="/info/:address" component={SmallPopup} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
