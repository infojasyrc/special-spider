import { BrowserRouter, Route } from 'react-router-dom'

import EventsPage from '../../pages/Events/Events'
import PlayEventPage from '../../pages/PlayEvent/PlayEvent'

// Legacy
import OauthDashboard from '../Dashboard/OauthDashboard'

export default function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Route exact path="/" component={OauthDashboard} />
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/play-event/:id" component={PlayEventPage} />
    </BrowserRouter>
  )
}
