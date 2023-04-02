import { Route } from 'react-router-dom'

import EventsPage from '../../pages/Events/Events'
import EventPage from '../../pages/Event/Event'
import PlayEventPage from '../../pages/PlayEvent/PlayEvent'
import UsersPage from '../../pages/Users/Users'

// Legacy
import OauthDashboard from '../Dashboard/OauthDashboard'

export default function AppRoutes(): JSX.Element {
  return (
    <>
      <Route path="/">
        <OauthDashboard />
      </Route>
      <Route path="/events">
        <EventsPage />
      </Route>
      <Route path="/play-event/:id">
        <PlayEventPage />
      </Route>
      <Route path="/users">
        <UsersPage />
      </Route>
      <Route path="/event/add">
        <EventPage />
      </Route>
    </>
  )
}
