import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  withStyles,
  Typography
} from '@material-ui/core';
import Moment from 'moment';

import {styles} from '../styles/EventCard';
import {withUserContext} from '../hocs/UserContext';

class EventCard extends Component {

  handleCardClicked = () => {
    const {event, history, userContext, onSelectedEvent} = this.props;
    const {isAdmin, role} = userContext.user;
    if (isAdmin || role === 'Marketing') {
      history.push(`/event/update/${event.id}`);
      return;
    }

    if (!onSelectedEvent) {
      return;
    }

    onSelectedEvent(event);
  }

  getDatePart = (date, part) => {
    const dateObject = Moment(date, 'YYYY-MM-DD');

    if (part === 'day') {
      return dateObject.format('D');
    }

    if (part === 'month') {
      return dateObject.format('MMM');
    }

    return dateObject.format('D MMM YYYY');
  }

  getStatusNameClasses = (event) => {
    const {classes} = this.props;
    const statusNameClasses = [classes.statusName];

    if (event.status === 'paused') {
      statusNameClasses.push(classes.statusNameContrast);
    }

    return statusNameClasses;
  }

  getStatusClasses = (event) => {
    const {classes} = this.props;
    const statusClasses = [classes.status];

    if (event.status === 'created') {
      statusClasses.push(classes.statusCreated);
    }

    if (event.status === 'opened') {
      statusClasses.push(classes.statusOpen);
    }

    if (event.status === 'paused') {
      statusClasses.push(classes.statusOnPause);
    }

    if (event.status === 'closed') {
      statusClasses.push(classes.statusClosed);
    }

    return statusClasses;
  }

  renderCard = (event) => {
    const {classes} = this.props;

    const statusClasses = this
      .getStatusClasses(event)
      .join(' ');
    const statusNameClasses = this
      .getStatusNameClasses(event)
      .join(' ');

    const url = event.images && event.images.length > 0
      ? event.images[0].url
      : '/images/NoImage.png';

    return (
      <CardActionArea onClick={this.handleCardClicked}>
        <CardMedia
          className={classes.image}
          component="img"
          image={url}
          title={event.name}/>
        <div className={classes.location}>
          <h4 className={classes.locationName}>{event.headquarter.name}</h4>
        </div>
        <div className={classes.date}>
          <h1 className={classes.day}>{this.getDatePart(event.date, 'day')}</h1>
          <h3 className={classes.month}>{this.getDatePart(event.date, 'month')}</h3>
        </div>
        <div className={classes.bottom}>
          <h2 className={classes.title}>{event.name}</h2>
          <div className={statusClasses}>
            <Typography className={statusNameClasses}>
              {event.status}
            </Typography>
          </div>
        </div>
      </CardActionArea>
    );
  }

  render() {
    const {event, classes} = this.props;

    return (
      <Grid className={classes.cardGridItem} item xs={12} sm={5} md={4} lg={3}>
        <Card>
          {this.renderCard(event)}
        </Card>
      </Grid>
    );
  }
}

export default withRouter(withUserContext(withStyles(styles)(EventCard)));