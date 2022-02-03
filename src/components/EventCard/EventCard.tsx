// import { withRouter } from 'react-router-dom'
import Moment from 'moment'
import {
  Card,
  CardActionArea,
  // CardMedia,
  createStyles,
  Grid,
  makeStyles,
} from '@material-ui/core'

import ConferenceStatusSection from './ConferenceStatusSection'

// import { withUserContext } from '../../hocs/UserContext'
import { Conference } from '../../shared/entities'

import { colors } from '../../styles/theme/colors'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '100%',
      height: '20em',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    cardGridItem: {
      padding: '0.2em',
    },
    image: {
      width: '100%',
      height: '20em',
      objectFit: 'cover',
    },
    location: {
      backgroundColor: colors.dark,
      paddingLeft: '0.5em',
      paddingRight: '0.5em',
      borderRadius: '5%',
      color: colors.white,
    },
    locationName: {
      marginTop: '1em',
      marginBottom: '1em',
      marginLeft: '0.5em',
      marginRight: '0.5em',
    },
    date: {
      position: 'absolute',
      top: '1em',
      right: '1em',
      backgroundColor: colors.white,
      paddingTop: '0.25em',
      paddingBottom: '0.25em',
      paddingLeft: '1em',
      paddingRight: '1em',
      borderRadius: '5%',
    },
    day: {
      color: colors.orange,
      fontFamily: 'Exo',
      margin: 0,
      textAlign: 'center',
    },
    month: {
      textTransform: 'uppercase',
      fontFamily: 'Exo',
      margin: 0,
    },
    bottom: {
      display: 'grid',
      width: '100%',
      padding: '1em',
      backgroundColor: colors.transparentBlack,
    },
    title: {
      color: colors.white,
      fontFamily: 'Exo',
      whiteSpace: 'nowrap',
      margin: 0,
    },
    eventStatus: {
      position: 'absolute',
      right: '0.5em',
    }
  })
)

type DateParts = 'day' | 'month'

export interface EventCardProps {
  event: Conference
  onSelectedEvent: (event: Conference) => void
}

export default function EventCard({
  event,
  onSelectedEvent,
}: EventCardProps): JSX.Element {
  const classes = useStyles()

  const handleCardClicked = () => {
    //     const {event, history, userContext, onSelectedEvent} = this.props;
    //     const {isAdmin, role} = userContext.user;
    //     if (isAdmin || role === 'Marketing') {
    //       history.push(`/event/update/${event.id}`);
    //       return;
    //     }

    //     if (!onSelectedEvent) {
    //       return;
    //     }
    console.log('selected event: ', event)
    onSelectedEvent(event)
  }

  const getDatePart = (date: string, part: DateParts) => {
    const dateObject = Moment(date, 'YYYY-MM-DD')

    if (part === 'day') {
      return dateObject.format('D')
    }

    if (part === 'month') {
      return dateObject.format('MMM')
    }

    return dateObject.format('D MMM YYYY')
  }

  //     const url = event.images && event.images.length > 0
  //       ? event.images[0].url
  //       : '/images/NoImage.png';

  return (
    <Grid className={classes.cardGridItem} item xs={12} sm={5} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea onClick={handleCardClicked}>
          {/* <CardMedia
          className={classes.image}
          component="img"
          image={
            event.images && event.images.length > 0
              ? event.images[0]?.url
              : '/images/NoImage.png'
          }
          title={event.name}
        /> */}
          <div className={classes.location}></div>
          <div className={classes.date}>
            <h1 className={classes.day}>
              {getDatePart(event.eventDate, 'day')}
            </h1>
            <h3 className={classes.month}>
              {getDatePart(event.eventDate, 'month')}
            </h3>
          </div>
          <div className={classes.bottom}>
            <h2 className={classes.title}>{event.name}</h2>
            <div className={classes.eventStatus}>
              <ConferenceStatusSection status={event.status} />
            </div>            
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
