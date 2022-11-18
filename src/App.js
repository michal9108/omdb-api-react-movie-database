import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from './config/Router';

import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          // map pri použití metódy map() musí byť pre každý prvok uvedený jedinečný kľúč
          <Route exact={route.exact} path={route.path}>
            <Layout>{route.component}</Layout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
