// import React from "react";
import { createStyles, makeStyles  } from "@material-ui/styles";

import EventCard from '../EventCard';

const useStyles = makeStyles(() => createStyles({
  noResults: {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: '3em'
  },
}))

export type EventListProps = {
  events: [],
  onOpen: () => {},
  onPause: () => {},
  onClose: () => {},
  onSelected: () => {},
}

export default function EventList({ events, onOpen, onPause, onClose, onSelected }: EventListProps): JSX.Element {
  const classes = useStyles();

  const handleOpen = () => onOpen
  const handlePause = () => onPause
  const handleClose = () => onClose
  const handleSelected = () => onSelected

  if (!events || events.length === 0) {
    return <h4 className={classes.noResults}>No results found for the selected year and headquarter</h4>;
  }

  return <>
    {events.map((event, index) => 
      <EventCard
        event={event}
        key={index}
        onOpen={handleOpen}
        onPause={handlePause}
        onClose={handleClose}
        onSelectedEvent={handleSelected}
      />)}
  </>
}