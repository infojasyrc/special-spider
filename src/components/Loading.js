import React, {Component} from 'react';
import {withStyles, CircularProgress} from '@material-ui/core';

import {styles} from '../styles/Loading';

class Loading extends Component {
  render() {
    const {isLoading, classes} = this.props;

    if (!isLoading) {
      return null;
    }

    return (
      <div className={classes.container}>
        <CircularProgress className={classes.waiting} size={100}/>
      </div>
    );
  }
}

export default withStyles(styles)(Loading);