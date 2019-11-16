import React from 'react';
import { Container } from 'semantic-ui-react';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const coords = [60.1654, 24.9374]

const map = (
  <Map 
    center={coords} 
    zoom={15} 
    width={800} 
    height={500}
    provider={(x, y, z) => {
      const s = String.fromCharCode(97 + (x + y + z) % 3)
      return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
    }}
    animate={true}
    mouseEvents={true}
  >
    <Marker anchor={coords} payload={1} onClick={({ event, anchor, payload }) => {}} />

    <Overlay anchor={coords} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
  </Map>
)

function App() {
  return (
    <div className="App">
      Epic
      {map}
      <Button>Click Here</Button>
    </div>
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
        augue. Curabitur ullamcorper ultricies.
      </p>
    </Container>
  );
}

export default App;
