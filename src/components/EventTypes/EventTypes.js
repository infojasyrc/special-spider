import React, {Component} from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  withStyles
} from '@material-ui/core';

import {styles} from './../../styles/EventTypes';

class EventTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.props.onUpdateEventType(this.state.value);
    }
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  render() {
    const {selectedEventType, classes} = this.props;

    return (
      <FormControl row
        className={classes.eventTypeContainerControl}>
        <FormLabel
          className={classes.eventTypeContainer}
        >
          Event Type
        </FormLabel>
        <RadioGroup
          aria-label="Event Type"
          name="radioEventType"
          className={classes.radioGroupEventTypes}
          value={selectedEventType}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="recruiting"
            control={<Radio/>}
            label="Recruiting"
            className={classes.radioOptionLabel}
          />
          <FormControlLabel
            value="sales"
            control={<Radio/>}
            label="Sales"
            className={classes.radioOptionLabel}
          />
        </RadioGroup>
      </FormControl>
    );
  }
}

export default withStyles(styles)(EventTypes);
