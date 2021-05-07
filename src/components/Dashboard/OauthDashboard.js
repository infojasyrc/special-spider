import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';

import FullLayout from '../../hocs/FullLayout';
import {ActionsContext} from '../../contexts/ActionsContext';
import {withMessage} from '../../hocs/Snackbar';

import {withUserContext} from '../../hocs/UserContext';

import {styles} from '../../styles/Dashboard';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <FullLayout title="Special Spider App">
      </FullLayout>
    );
  }
}

Dashboard.contextType = ActionsContext;

export default withMessage(withUserContext(withRouter(withStyles(styles)(Dashboard))));
