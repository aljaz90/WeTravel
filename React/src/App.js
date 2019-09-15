import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import './main.css';
import Home from './containers/Home/Home';
import Trip from './containers/Trip/Trip';
import Test from './containers/Test/Test';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trip" component={Trip} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Layout>
  );
}

export default App;