import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Dashboard from '../components/Dashboard/Dashboard';
import Users from '../components/Users';
import CreateUpdateUser from '../components/CreateUpdateUser';
import CreateUpdateEvent from '../components/CreateUpdateEvent';
import Event from '../components/Event';
import AttendeeForm from '../components/AttendeeForm';
import ExportAttendees from '../components/ExportAttendees';
import ChangePassword from '../components/Profile/ChangePassword';
import Profile from '../components/Profile/Profile';

class Routes extends Component {
  render() {

    return (
      <React.Fragment>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/users' component={Users}/>
        <Route exact path='/export-attendees' component={ExportAttendees}/>
        <Route exact path='/user/change-password' component={ChangePassword}/>
        <Route exact path='/profile' component={Profile}/>
        <Route
          exact
          path='/users/add'
          render={() => <CreateUpdateUser isAdding={true}/>}/>
        <Route
          exact
          path='/users/update/:id'
          render={() => <CreateUpdateUser isAdding={false}/>}/>
        <Route
          exact
          path='/event/add'
          render={() => <CreateUpdateEvent isAdding={true}/>}/>
        <Route
          exact
          path='/event/update/:id'
          render={() => <CreateUpdateEvent isAdding={false}/>}/>
        <Route exact path='/play-event/:id' component={Event}/>
        <Route exact path='/add-attendee/:id' component={AttendeeForm}/>
      </React.Fragment>
    );
  }
}

export default Routes;
