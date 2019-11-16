import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BuildingMap from './components/BuildingMap';
import InfoPage from './components/InfoPage';
import { data } from './db.js'


function App() {

  const [typed, setTyped] = useState("Search...")
  const [options, setOptions] = useState([])

  useEffect(() => {
    setTyped(typed)
  }, [])

  const handleFilterChange = (event) => {
    setTyped(event.target.value)
    handleOptionChange()
  }

  const handleOptionChange = (event) => {
    const newData = data.map(x => x.address).filter(x => x.toLowerCase().startsWith(typed)).map(y => <p key="y">{y}</p>)
    setOptions(newData)
  }


  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/info/:address`} component={InfoPage} />

      <Route path={`${process.env.PUBLIC_URL}/test`} >
        <InfoPage />
      </Route>

      <Route path={`${process.env.PUBLIC_URL}/`} >
        <div>
          <BuildingMap typed = {typed} change = {handleFilterChange} options = {options}/>
        </div>
      </Route>

      <Redirect to={`${process.env.PUBLIC_URL}/`} />
    </Switch>
  );
}

export default App;
