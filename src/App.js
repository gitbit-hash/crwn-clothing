import React from 'react';
import { Route,Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css';

const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={Hats} />
    </Switch>
  );
}

export default App;
