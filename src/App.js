import React from 'react';
import './App.css'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import BuildingMap from './components/BuildingMap'
import InfoPage from './components/InfoPage'
import { Container, Search } from 'semantic-ui-react';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const coords = [60.1654, 24.9374]
const sites = ["Mannerheimintie 12\n", "Etelä-Esplanadi 8\n", "Pohjoistie 7\n"]


const search = (
  <Search
  placeholder="Search..."
  classNames="search"
  />

)

sites.map(x => <li>x</li>)

const options = (
  <Container>
    <div>
      <ul>
        {sites}
     </ul>
    </div>
  </Container>
)

const map = (
  <Map 
    center={coords} 
    zoom={15} 
    width={800} 
    height={500}
    provider={(x, y, z, dpr) => {
      return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png`
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
      <div className="sidebar">
        {search}
        {options}
      </div>
      <div className="map">
        <Switch>
          <Route exact path="/"  component={BuildingMap} />
          <Route path="/info/:address" component={InfoPage} />
          <Redirect to="/" />
        </Switch>
        {map}
      </div>
    </div>
  )
}

export default App;
