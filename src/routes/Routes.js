import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import EventsPage from '../pages/Events/Events'
import EventPage from '../pages/Event/Event'
import PlayEventPage from '../pages/PlayEvent/PlayEvent'
import OauthDashboard from '../components/Dashboard/OauthDashboard'
import Users from '../components/Users'
import CreateUpdateUser from '../components/CreateUpdateUser'
// import CreateUpdateEvent from '../components/CreateUpdateEvent'
// import Event from '../components/Event'
import AttendeeForm from '../components/AttendeeForm'
import ExportAttendees from '../components/ExportAttendees'
import ChangePassword from '../components/Profile/ChangePassword'
import Profile from '../components/Profile/Profile'

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={OauthDashboard} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/export-attendees" component={ExportAttendees} />
        <Route exact path="/user/change-password" component={ChangePassword} />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/users/add"
          render={() => <CreateUpdateUser isAdding={true} />}
        />
        <Route
          exact
          path="/users/update/:id"
          render={() => <CreateUpdateUser isAdding={false} />}
        />
        <Route
          exact
          path="/event/add"
          render={() => <EventPage isAdding={true} />}
        />
        <Route
          exact
          path="/event/update/:id"
          render={() => <EventPage isAdding={false} />}
        />
        {/* <Route exact path='/play-event/:id' component={Event}/> */}
        <Route exact path="/play-event/:id" component={PlayEventPage} />
        <Route exact path="/add-attendee/:id" component={AttendeeForm} />
      </React.Fragment>
    )
  }
}

export default Routes
