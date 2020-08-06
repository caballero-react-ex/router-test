import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Chip from './Chip';
import Soda from './Soda';
import Bifi from './Bifi';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Switch>
        <Route exact path='/' component={VendingMachine} />
        <Route exact path='/chip' component={Chip} />
        <Route exact path='/soda' component={Soda} />
        <Route exact path='/bifi' component={Bifi} />
      </Switch>
    </div>
  );
}

export default App;
