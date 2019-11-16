import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const popupContent = (address) => {

  return (
    <div>
      <div>Osoite: {address}</div>
      <div>Status: in progress</div>
      <div>ETA: 3m</div>
      <Link to={`/info/${address}`}>More Info</Link>
    </div>
  );
};

function SmallPopup(address) {
  return (
    <div>
      <Popup
        trigger={<Icon circular name="blue large map marker alternate" />}
        content={() => popupContent(address)}
        on="click"
        pinned
        size="huge"
      />
    </div>
  );
}

export default SmallPopup;
