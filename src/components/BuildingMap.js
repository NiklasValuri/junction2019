
import React, {useState} from 'react'
import Map from 'pigeon-maps'
//import Marker from 'pigeon-marker'
import Marker from './Marker'
import Overlay from 'pigeon-overlay'
import { Search } from 'semantic-ui-react'
import { data } from '../db.js'



const coords = [60.1954, 24.9174];

const search = (typed, change, options) => (
  <div>
    <Search
      onSearchChange={change}
      placeholder={typed}
      classNames="search"
    />
  <div>
    <ul>
      {options}
    </ul>
  </div>
  </div>
)

const map = (
    <Map
      center={coords}
      zoom={11}
      provider={(x, y, z, dpr) => {
        return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png`;
      }}
      animate={true}
      mouseEvents={true}
      defaultWidth={1200}
      height={500}
    >
      {data.map(({description,startDate,endDate,address,name, lat, lng}) => {
        if (!(lng === 0 || isNaN(lat) || lat <= 60 || lat > 60.5))
          return (
            <Marker 
              address={address} 
              name={name} 
              anchor={[lat, lng]} 
              payload={1} 
              onClick={({ event, anchor, payload }) => {}} 
            />)
        else return null
        })}
  </Map>
)

const styles = {
    margin: 10,
    display: 'flex'
}

function BuildingMap({typed, change, options}) {
  return (
    <div style = {styles}>
      {search(change, typed, options)}
      {map}
    </div>
  );
}

export default BuildingMap;
