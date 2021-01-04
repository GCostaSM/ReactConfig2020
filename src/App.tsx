// src/App.jsx
import React from 'react';
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import  Default  from './components/Default/Default'
import  { Background }  from './StyledApp'

export const App = () => (
  <Background className="App">
    <div className="link-container">
        <NavLink activeClassName="active" exact to="/">
          Main
        </NavLink><br/>
        <NavLink activeClassName="active" to="/tt">
          tt
        </NavLink>
      </div>
    <Switch>
      <Route path="/" exact component={Default} />
      <Route path="/tt" exact component={Default} />
    </Switch>
  </Background>
);