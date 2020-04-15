import React from 'react';
import Splash from './splash';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div>
    <Route exact path="/" component={Splash} />
  </div>
);
