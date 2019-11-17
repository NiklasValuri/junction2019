import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const popupContent = props => {
  return (
    <div>
      <div>Site: {props.name}</div>
      <div>Address: {props.address}</div>
      <div>Status: In Progress</div>
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
