import React from 'react';
import AirlineAPI from './components/AirlineAPI/AirlineAPI';
import { Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import './main.css';
import Home from './containers/Home/Home';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;