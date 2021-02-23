import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { NavBar,Footer } from './components';
import './App.css';

function App() {
  return (
    <MemoryRouter>
      <NavBar/>
      <Switch>
        <Route path="/" component={HomePage}></Route>
      </Switch>
      <Footer/>
  </MemoryRouter>
  );
}

export default App;
