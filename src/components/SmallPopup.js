import React from 'react'
import { Popup, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const popupContent = () => {
  return (
    <div>
      <div>Osoite 12 B</div>
      <div>Status: in progress</div>
      <div>ETA: 3m</div>
      <Link to='/info/osoite12b'>More Info</Link>
    </div>
  )
}

function SmallPopup() {
  return (
    <div>
      <Popup
        trigger={<Icon circular name='map marker alternate' />}
        content={popupContent}
        on='click'
        pinned
        size='huge'
      />
    </div>
  )
}

export default SmallPopup