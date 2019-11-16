import React from 'react';
import Map from 'pigeon-maps';
import Marker from './Marker';
import { data } from '../db';
import useWindowDimensions from '../useWindowDimensions';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import styled from 'styled-components';

const coords = [60.1954, 24.9174];

const search = (typed, change, options) => {
  return (
    <div>
      <Input type="text" size="large" onChange={change} icon="search" placeholder="Search..." />
      <div>
        <List>
          {options.map(address => {
            return <Link to={`/info/${address.props.children}`}>{address}</Link>;
          })}
        </List>
      </div>
    </div>
  );
};

export default function BuildingMap({ typed, change, options }) {
  const { height, width } = useWindowDimensions();
  return (
    <div style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto', display: 'flex' }}>
      <SideBar> {search(typed, change, options)}</SideBar>
      <Map
        center={coords}
        zoom={11}
        provider={(x, y, z, dpr) => {
          return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png`;
        }}
        animate={true}
        mouseEvents={true}
        defaultWidth={width}
        height={height}
      >
        {data.map(({ id, startDate, endDate, address, name, lat, lng }) => {
          if (!(lng === 0 || isNaN(lat) || lat <= 60 || lat > 60.5))
            return (
              <Marker
                address={address}
                name={name}
                id={id}
                anchor={[lat, lng]}
                payload={1}
                onClick={({ event, anchor, payload }) => {}}
              />
            );
          else return null;
        })}
      </Map>
    </div>
  );
}

const SideBar = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
`;

const List = styled.ul`
  height: 100vh;
  overflow-y: scroll;
`;
