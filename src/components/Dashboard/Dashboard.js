import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
  Grid,
  withStyles,
  Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import FullLayout from '../../hocs/FullLayout';
import {ActionsContext} from '../../contexts/ActionsContext';
import {withMessage} from '../../hocs/Snackbar';

import Loading from '../Loading';
// import EventCard from '../EventCard';
import EventList from '../EventList/EventList';
import NavigationWrapper from '../NavigationWrapper';
import {sortDescending, sortAscending} from '../../tools';
import {withUserContext} from '../../hocs/UserContext';

import PreviewEvent from '../PreviewEvent';
import Headquarters from './Headquarters';
import DashboardFilters from './DashboardFilters';

import database from '../../database/database';
import DataService from '../../database/dataService';

import Events from '../../api/events';

import {styles} from '../../styles/Dashboard';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: null,
      events: null,
      selectedYear: null,
      selectedHeadquarter: null,
      selectedEvent: null,
      sortBy: null,
      loading: false,
      error: null
    };

    this.api = new Events();
    this.db = new DataService(database, 'attendees');
  }

  fetchEvents = () => {
    const {selectedYear, selectedHeadquarter, selectedEvent} = this.state;
    const {showLoading, hideMessage, userContext} = this.props;

    if (!selectedYear || !selectedHeadquarter) {
      return;
    }

    showLoading();

    this.api.getAll(selectedYear, selectedHeadquarter, userContext.user.isAdmin)
      .then(events => {
        let newSelectedEvent = null;

        if (selectedEvent) {
          const index = events.findIndex(event => {
            return event.id === selectedEvent.id;
          });

          newSelectedEvent = index > 0 ? events[index] : null;
        }

        this.setState({
          events: this.sortByDate(events),
          selectedEvent: newSelectedEvent,
          loading: false,
          error: null
        }, () => {
          hideMessage();
        })
      })
      .catch(error => {
        this.setState({loading: false});
        hideMessage();
        console.error(error);
      });
  }

  sortByDate = (events) => {
    const {sortBy} = this.state;

    if (!events) {
      return;
    }

    if (sortBy === 'newest') {
      return events.sort(sortDescending);
    }

    return events.sort(sortAscending);
  }

  handleHeadquarterChanged = selectedHeadquarter => {
    this.setState({selectedHeadquarter: selectedHeadquarter}, () => {this.fetchEvents()});
  }

  handleFiltersChanged = filters => {
    this.setState({sortBy: filters.sortBy, selectedYear: filters.year}, () => {this.fetchEvents()});
  }

  handleSelectedEvent = (event) => {
    this.setState({selectedEvent: event});
  }
  // TODO: This function should be moved to a specific component for preview event
  handleOpenClicked = (id) => {
    this.setState({isLoading: true});

    this.api.open(id)
      .then(() => {
        this.setState({
          isLoading: false
        }, () => {
          this.fetchEvents();
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({isLoading: false});
      });
  }
  // TODO: This function should be moved to a specific component for preview event
  handlePauseClicked = (id) => {
    this.setState({isLoading: true});

    this.api.pause(id)
      .then(() => {
        this.setState({
          isLoading: false
        }, () => {
          this.fetchEvents();
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({isLoading: false});
      });
  }
  // TODO: This function should be moved to a specific component for preview event
  handleCloseClicked = (id) => {
    this.setState({isLoading: true});

    this.api.close(id)
      .then(() => {
        this.setState({
          isLoading: false
        }, () => {
          this.fetchEvents();
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({isLoading: false});
      });
  }
  // TODO: This function should be moved to a specific component for preview event
  handleEnterClicked = (id) => {
    const {history} = this.props;
    this.setState({selectedEvent: null});
    history.push(`/play-event/${id}`);
  }

  handlePreviewClosed = () => {
    this.setState({selectedEvent: null});
  }

  handleSynchronizeClicked = (idEvent) => {
    const {showMessage, hideMessage} = this.props;

    showMessage('Uploading attendees');

    this.setState({isLoading: true});
    this.db.getByKey('idEvent', idEvent).toArray()
      .then(attendees => {
        this.api.addAttendees(idEvent, attendees)
          .then(() => {
            attendees.forEach(attendee => {
              this.db.delete(attendee.id)
                .then(() => {
                  this.setState({
                    isLoading: false,
                    activeStep: 2
                  }, () => {
                    hideMessage();
                  });
                })
                .catch(error => {
                  console.error('Error while deleting attendee from IndexedDb', error);
                  this.setState({
                    isLoading: false
                  }, () => {
                    hideMessage();
                  });
                });
            });
          })
          .catch(error => {
            console.error('Error while uploading attendee to server', error);
            this.setState({
              isLoading: false
            }, () => {
              hideMessage();
            });
          });
      })
      .catch(error => {
        console.error('Error while reading attendees from IndexedDb', error);
        this.setState({
          isLoading: false
        }, () => {
          hideMessage();
        });
      });
  }

  renderFilters = () => {
    const {classes} = this.props;

    return (
      <Grid container justify="center" className={classes.headquarterFilter}>
        <Headquarters changeHeadquarter={this.handleHeadquarterChanged}/>
        <DashboardFilters changeFilters={this.handleFiltersChanged}/>
      </Grid>
    );
  }

  renderEvents = () => {
    const {events} = this.state;

    // return events.map((event, index) => {
    //   return (<EventCard
    //     event={event}
    //     key={index}
    //     onOpen={this.handleOpenClicked}
    //     onPause={this.handlePauseClicked}
    //     onClose={this.handleCloseClicked}
    //     onSelectedEvent={this.handleSelectedEvent}/>);
    // });
    return <EventList
      events={events}
      onOpen={this.handleOpenClicked}
      onPause={this.handlePauseClicked}
      onClose={this.handleCloseClicked}
      onSelected={this.handleSelectedEvent}
    />
  }

  renderContent = () => {
    const {loading} = this.state;

    if (loading) {
      return (<Loading isLoading={loading}/>);
    }

    return (
      <React.Fragment>
        {this.renderFilters()}
        <Grid container>
          {this.renderEvents()}
        </Grid>
      </React.Fragment>
    )
  }

  renderAddButton = () => {
    const {classes, userContext} = this.props;
    const {isAdmin} = userContext.user;

    if (!isAdmin) {
      return null;
    }

    return (
      <NavigationWrapper path="/event/add">
        <Fab className={classes.add} color="primary">
          <AddIcon/>
        </Fab>
      </NavigationWrapper>
    );
  }
  // TODO: This function should be converted to a specific component
  renderPreviewEvent = () => {
    const {selectedEvent} = this.state;
    const {userContext} = this.props;
    const {role} = userContext.user;

    if (role === 'Marketing') {
      return null;
    }

    if (!selectedEvent) {
      return null;
    }

    return (<PreviewEvent
      event={selectedEvent}
      onOpen={this.handleOpenClicked}
      onPause={this.handlePauseClicked}
      onClose={this.handleCloseClicked}
      onEnter={this.handleEnterClicked}
      onSynchronize={this.handleSynchronizeClicked}
      onPreviewClose={this.handlePreviewClosed}/>);
  }

  render() {
    const {classes} = this.props;
    return (
      <FullLayout title="Special Spider App">
        <h1 className={classes.title}>Events</h1>
        <h1 className={classes.title}>Accounts</h1>
        {this.renderContent()}
        {this.renderAddButton()}
        {/*this.renderPreviewEvent()*/}
      </FullLayout>
    );
  }
}

Dashboard.contextType = ActionsContext;

export default withMessage(withUserContext(withRouter(withStyles(styles)(Dashboard))));
