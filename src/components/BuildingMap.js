import React from 'react';
import Map from 'pigeon-maps';
//import Marker from 'pigeon-marker'
import Marker from './Marker';
import Overlay from 'pigeon-overlay';
import { data } from '../db'

const coords = [60.1954, 24.9174];

function BuildingMap() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
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
                anchor={[lat, lng]} 
                payload={1} 
                onClick={({ event, anchor, payload }) => {}} 
              />)
          else return null
          })}

        <Overlay anchor={coords} offset={[120, 79]}>
          <img src="pigeon.jpg" width={240} height={158} alt="" />
        </Overlay>
      </Map>
    </div>
  );
}

export default BuildingMap;
