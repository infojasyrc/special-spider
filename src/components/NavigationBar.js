import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {styles} from '../styles/NavigationBar';

class NavigationBar extends Component {
  handleBackClick = (e) => {
    e.preventDefault();

    const {history} = this.props;
    history.goBack();
  }

  render() {
    const {classes, title, showLogo} = this.props;

    let logo = null;
    if (showLogo) {
      logo = (<img className={classes.logo} src="/images/Logo.png" alt="Special Spider"/>);
    }

    return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton aria-label="Back" onClick={this.handleBackClick}>
            <ArrowBackIcon className={classes.arrowBackIcon}/>
          </IconButton>
          <Typography className={classes.title} variant="h5">
            {title}
          </Typography>
          {logo}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(NavigationBar));