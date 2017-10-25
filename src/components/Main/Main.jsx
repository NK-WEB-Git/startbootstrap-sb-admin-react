import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Breadcrumb from './Breadcrumb';
import Home from './Home';

export default function Main() {
  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <Breadcrumb/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </div>
  );
}