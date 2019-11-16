import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import BuildingMap from './components/BuildingMap'
import InfoPage from './components/InfoPage'
import { Container } from 'semantic-ui-react';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const coords = [60.1654, 24.9374]

const map = (
  <Map 
    center={coords} 
    zoom={15} 
    width={800} 
    height={500}
    provider={(x, y, z) => {
      const s = String.fromCharCode(97 + (x + y + z) % 3)
      return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
    }}
    animate={true}
    mouseEvents={true}
  >
    <Marker anchor={coords} payload={1} onClick={({ event, anchor, payload }) => {}} />

    <Overlay anchor={coords} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
  </Map>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  component={BuildingMap} />
        <Route path="/info/:address" component={InfoPage} />
        <Redirect to="/" />
      </Switch>
      Epic
      {map}
    </div>
  )
}

export default App;
