import React, {useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BuildingMap from './components/BuildingMap';
import InfoPage from './components/InfoPage';


function App() {
  /*
  const [typed, setTyped] = useState("Search...")
  const [options, setOptions] = useState([])

  const handleFilterChange = (event) => {
    setNewOptions(event.target.value)
  }
*/
  return (
    <Switch>
      <Route path="/info/:address" component={InfoPage} />


      <Route path="/test">
        <InfoPage />
      </Route>

      <Route path="/">
        <div>
          <BuildingMap />
        </div>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
