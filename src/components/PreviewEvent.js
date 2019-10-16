import React, {Component} from 'react';
import {
  withStyles,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  DialogActions,
  DialogContent
} from '@material-ui/core';
import Moment from 'moment';
import ImagesPreview from './ImagesPreview';
import database from '../database/database';
import DataService from '../database/dataService';

const styles = theme => ({
  title: {
    color: theme.colors.orange,
    fontFamily: 'Exo',
    fontSize: '3em',
    fontWeight: 'bold'
  },
  contentContainer: {
    padding: '2em'
  },
  row: {
    marginBottom: '1em'
  },
  label: {
    fontSize: '1em',
    fontWeight: 'bold',
    display: 'block'
  }
});

class PreviewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canSynchronize: false
    };

    this.db = new DataService(database, 'attendees');
  }

  componentDidMount() {
    const {event} = this.props;
    this
      .db
      .countByKey('idEvent', event.id)
      .then(result => {
        if (result <= 0) {
          return;
        }

        this.setState({canSynchronize: true});
      })
      .catch(error => {
        console.error('Error while counting number of attendees', error);
      });
  }

  renderCorrespondingActions = () => {
    const {
      event,
      onOpen,
      onPause,
      onEnter,
      onSynchronize,
      onClose
    } = this.props;
    const actions = [];
    if (event.status === 'created') {
      return (
        <Button key="open" onClick={() => onOpen(event.id)}>
          Open
        </Button>
      );
    }

    if (event.status === 'opened') {
      actions.push(
        <Button key="pause" onClick={() => onPause(event.id)}>
          Pause
        </Button>
      );

      actions.push(
        <Button key="close" onClick={() => onClose(event.id)}>
          Close event
        </Button>
      );

      actions.push(
        <Button key="enter" onClick={() => onEnter(event.id)}>
          Go!
        </Button>
      );
    }

    if (event.status === 'paused') {
      actions.push(
        <Button key="unpause" onClick={() => onOpen(event.id)}>
          Unpause
        </Button>
      );
    }

    if (this.state.canSynchronize) {
      actions.push(
        <Button key="synchronize" onClick={() => onSynchronize(event.id)}>
          Upload attendees
        </Button>
      );
    }

    return actions;
  }

  render() {
    const {classes, event, onPreviewClose} = this.props;

    if (!event) {
      return null;
    }

    const date = Moment(event.date, 'YYYY-MM-DDThh:mm:ss');

    return (
      <Dialog open={true} onClose={onPreviewClose} maxWidth="lg" fullWidth>
        <DialogTitle disableTypography className={classes.title}>{event.name}</DialogTitle>
        <DialogContent>
          <Grid container className={classes.contentContainer}>
            <Grid container direction="row" className={classes.row}>
              <Grid item xs={6}>
                <label className={classes.label}>Date</label>
                <label>{date.format('D MMM YYYY')}</label>
              </Grid>
              <Grid item xs={6}>
                <label className={classes.label}>Time</label>
                <label>{date.format('hh:mm')}</label>
              </Grid>
            </Grid>
            <Grid container direction="row" className={classes.row}>
              <Grid item xs={6}>
                <label className={classes.label}>Responsable</label>
                <label>{event.responsable.name}</label>
              </Grid>
              <Grid item xs={6}>
                <label className={classes.label}>Place</label>
                <label>{event.placeName}</label>
              </Grid>

            </Grid>
            <Grid container direction="row" className={classes.row}>
              <Grid item xs={6}>
                <label className={classes.label}>Address</label>
                <label>{event.address}</label>
              </Grid>
              <Grid item xs={6}>
                <label className={classes.label}>Phone</label>
                <label>{event.phoneNumber}</label>
              </Grid>
            </Grid>
            <Grid container direction="row" className={classes.row}>
              <ImagesPreview images={event.images} enableEdit={false}/>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {this.renderCorrespondingActions()}
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(PreviewEvent);
