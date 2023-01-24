import { useState } from 'react'
import { makeStyles, createStyles, Grid, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import FullLayout from '../../hocs/FullLayout'
import EventList from '../EventList/EventList'
import Headquarters from '../Headquarters/Headquarters'
import DashboardFilters from '../Dashboard/DashboardFilters'
import NavigationWrapper from '../Navigation/NavigationWrapper'

import {
  Conference,
  Headquarter,
  ConferenceFilters,
} from '../../shared/entities'

import { sortAscending, sortDescending } from '../../tools/sorting'

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
}

export default function EventsView({
  events,
  allHeadquarters,
  loadingEvents,
  loadingHeadquarters,
  isAdmin,
  selectedHeadquarter = '-1',
  // onOpen,
  // onPause,
  // onClose,
  onSelectedEvent,
}: EventsViewProps): JSX.Element {
  const [allEvents] = useState<Conference[]>(events)
  const [filteredEvents, setFilteredEvents] = useState<Conference[]>(events)
  const classes = useStyles()

  const handleSelected = (event: Conference) => onSelectedEvent(event)

  const handleChangeFilters = (filters: ConferenceFilters) => {
    if (filters.sortBy) {
      const sortedAllEvents =
        filters.sortBy === 'newest'
          ? JSON.parse(JSON.stringify(allEvents)).sort(sortDescending)
          : JSON.parse(JSON.stringify(allEvents)).sort(sortAscending)
      setFilteredEvents(sortedAllEvents)
    }
  }

  const handleHeadquarterChanged = (selectedHeadquarter: string) => {
    let filteredByHeadquarter: Conference[] = JSON.parse(
      JSON.stringify(allEvents)
    )

    if (selectedHeadquarter !== '-1') {
      filteredByHeadquarter = filteredByHeadquarter.filter(
        (element: Conference) =>
          element.headquarter && element.headquarter.id === selectedHeadquarter
      )
    }

    setFilteredEvents(filteredByHeadquarter)
  }

  if (loadingEvents) {
    return <>Loading...</>
  }

  return (
    <>
      {!loadingEvents && (
        <FullLayout title="Special Spider App">
          <h1 className={classes.title}>Events</h1>
          <Grid
            container
            justifyContent="center"
            className={classes.headquarterFilter}
          >
            {loadingEvents && <>Loading Headquarters...</>}
            {!loadingEvents && (
              <Headquarters
                onChangeHeadquarter={handleHeadquarterChanged}
                allHeadquarters={allHeadquarters}
                selectedHeadquarter={selectedHeadquarter}
                loading={loadingHeadquarters}
              />
            )}
            <DashboardFilters onChangeFilters={handleChangeFilters} />
          </Grid>
          <Grid container>
            <EventList
              events={filteredEvents}
              // onOpen={onOpen}
              // onPause={onPause}
              // onClose={onClose}
              onSelected={handleSelected}
            />
          </Grid>
          {/* <h1 className={classes.title}>Accounts</h1> */}
          {isAdmin && (
            <NavigationWrapper path="/event/add">
              <Fab className={classes.add} color="primary">
                <AddIcon />
              </Fab>
            </NavigationWrapper>
          )}
          {/*this.renderPreviewEvent()*/}
        </FullLayout>
      )}
    </>
  )
}
