import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const popupContent = (props) => {
  return (
    <div>
      <div>Nimi: {props.name}</div>
      <div>Osoite: {props.address}</div>
      <div>Status: in progress</div>
      <div>ETA: 3m</div>
      <Link to={`/info/${props.id}`}>More Info</Link>
    </div>
  );
};

function SmallPopup(props) {
  return (
    <div>
      <Popup
        trigger={<Icon circular name="blue large map marker alternate" />}
        content={() => popupContent(props)}
        on="click"
        pinned
        size="huge"
      />
    </div>
  );
}

export default SmallPopup;
