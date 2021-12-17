import Controlsection from "./components/Controlsection";
import Entrylist from "./components/Entrylist";
import Add from "./components/Add";
import Clock from "./components/Clock";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//imported useState to use that to display the entries on the entrylist section

// saving into database via statements
//updating the state of th entries via new entries and delete entries
function App() {
  
  const [entries, enterEntry] = useState([]);
  const onAddEntry = () => {
    console.log("add");// add entry
  }

  return (
    <Router>
    <div className="App">

    <Switch>
      <Route path='/' component={App} exact>
      <Controlsection />
      <Entrylist />
      <Clock />
      </Route>
      <Route path='/Add' component={Add} exact>
        <Add entries={entries} onAddEntry={onAddEntry} />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
