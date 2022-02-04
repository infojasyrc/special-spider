import { makeStyles, createStyles, Grid, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import FullLayout from '../../hocs/FullLayout'
import EventList from '../EventList/EventList'
import Headquarters from '../Headquarters/Headquarters'
import DashboardFilters from '../Dashboard/DashboardFilters'
import NavigationWrapper from '../Navigation/NavigationWrapper'

import { Conference, Headquarter, ConferenceFilters } from '../../shared/entities'

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      margin: '0',
      marginBottom: '0.5em',
    },
    headquarterFilter: {
      marginBottom: '1em',
    },
    centeredContent: {
      justifyContent: 'center',
    },
    noResults: {
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingTop: '3em',
    },
    add: {},
  })
)

export interface EventsViewProps {
  events: Conference[]
  allHeadquarters: Headquarter[]
  loadingEvents: boolean
  loadingHeadquarters: boolean
  isAdmin: boolean
  selectedHeadquarter?: string
  // onOpen: () => void
  // onPause: () => void
  // onClose: () => void
  onSelectedEvent: (event: Conference) => void
  changeHeadquarter: (headquarter: string) => void
  changeFilters: ({year, sortBy}: ConferenceFilters) => void
}

export default function EventsView({
  events,
  allHeadquarters,
  loadingEvents,
  loadingHeadquarters,
  isAdmin,
  selectedHeadquarter,
  // onOpen,
  // onPause,
  // onClose,
  onSelectedEvent,
  changeHeadquarter,
  changeFilters,
}: EventsViewProps): JSX.Element {
  const classes = useStyles()

  const handleSelected = (event: Conference) => onSelectedEvent(event)

  return (
    <FullLayout title="Special Spider App">
      <h1 className={classes.title}>Events</h1>
      <Grid container justify="center" className={classes.headquarterFilter}>
        <Headquarters
          onChangeHeadquarter={changeHeadquarter}
          allHeadquarters={allHeadquarters}
          selectedHeadquarter={selectedHeadquarter}
          loading={loadingHeadquarters}
        />
        <DashboardFilters changeFilters={changeFilters} />
      </Grid>
      <Grid container>
        {loadingEvents && <>Loading events</>}
        <EventList
          events={events}
          // onOpen={onOpen}
          // onPause={onPause}
          // onClose={onClose}
          onSelected={handleSelected}
        />
      </Grid>
      {/* <h1 className={classes.title}>Accounts</h1> */}
      { isAdmin && 
        <NavigationWrapper path="/event/add">
          <Fab className={classes.add} color="primary">
            <AddIcon />
          </Fab>
        </NavigationWrapper>
      }
      {/*this.renderPreviewEvent()*/}
    </FullLayout>
  )
}
