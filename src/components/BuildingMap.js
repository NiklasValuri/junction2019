import React from 'react';
import Map from 'pigeon-maps';
//import Marker from 'pigeon-marker'
import Marker from './Marker';
import Overlay from 'pigeon-overlay';

const coords = [60.1654, 24.9374];

function BuildingMap() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <Map
        center={coords}
        zoom={15}
        provider={(x, y, z, dpr) => {
          return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png`;
        }}
        animate={true}
        mouseEvents={true}
        defaultWidth={1200}
        height={500}
      >
        <Marker anchor={coords} payload={1} onClick={({ event, anchor, payload }) => {}} />

        <Overlay anchor={coords} offset={[120, 79]}>
          <img src="pigeon.jpg" width={240} height={158} alt="" />
        </Overlay>
      </Map>
    </div>
  );
}

export default BuildingMap;
