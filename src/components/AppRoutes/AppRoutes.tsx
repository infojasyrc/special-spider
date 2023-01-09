import { Route } from 'react-router-dom'

import EventsPage from '../../pages/Events/Events'
import PlayEventPage from '../../pages/PlayEvent/PlayEvent'

// Legacy
import OauthDashboard from '../Dashboard/OauthDashboard'

export default function AppRoutes(): JSX.Element {
  return (
    <>
      <Route path="/"><OauthDashboard/></Route>
      <Route path="/events"><EventsPage/></Route>
      <Route path="/play-event/:id"><PlayEventPage/></Route>
    </>
  )
}
