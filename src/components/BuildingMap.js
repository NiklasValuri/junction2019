import React, {useState} from 'react'
import Map from 'pigeon-maps'
//import Marker from 'pigeon-marker'
import Marker from './Marker'
import Overlay from 'pigeon-overlay'
import { Search } from 'semantic-ui-react'
import { data } from '../db.js'


const coords = [60.1654, 24.9374]
const sites = data.map(x=> x[3]).slice(1).map(y => <p>{y}</p>)
const search = (
  <div>
    <Search
      placeholder={"Search"}
      classNames="search"
    />
  <div>
    <ul>
      {sites}
    </ul>
  </div>
  </div>
)

const map = (
  <Map 
    center={coords} 
    zoom={15} 
    provider={(x, y, z, dpr) => {
      return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png`
    }}
    animate={true}
    mouseEvents={true}
    defaultWidth={1200} 
    height={500}
  >
    <Marker 
      anchor={coords} 
      payload={1} 
      onClick={({ event, anchor, payload }) => {}} 
    />

    <Overlay anchor={coords} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
  </Map>
)

const styles = {
  map: {
    display: 'flex',
    margin: 10
  }
}

function BuildingMap() {
  return (
    <div style={styles.map}>
      {search}
      {map}
    </div>
  )
}

export default BuildingMap
