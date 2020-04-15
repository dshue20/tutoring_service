import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Splash from './splash';
import AddTutor from './tutors/addTutor';

export default () => (
  <div>
    <Route exact path="/" component={Splash} />
    <Route exact path="/add-tutor" component={AddTutor}/>
  </div>
);
