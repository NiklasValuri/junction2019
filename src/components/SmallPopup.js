import React from 'react'
import { Button, Popup, Icon } from 'semantic-ui-react'

const popupContent = () => {
  return (
    <div>
      <div>Osoite 12 B</div>
      <div>Status: in progress</div>
      <div>Estimated time to done: 3m</div>
    </div>
  )
}

export default function SmallPopup() {
  return (
    <div>
      <Popup
        trigger={<Icon circular name='map marker alternate' />}
        content='Hello. This is a huge popup'
        size='huge'
      />
    </div>
  )
}