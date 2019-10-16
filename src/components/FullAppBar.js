import React, {Component} from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import DrawerMenu from './DrawerMenu';
import {styles} from '../styles/FullAppBar';

class FullAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false,
      filter: ''
    };
  }

  toggleDrawer = () => {
    this.setState({
      openDrawer: !this.state.openDrawer
    });
  }

  render() {
    const {openDrawer} = this.state;
    const {classes, title} = this.props;
    const version = process.env.REACT_APP_VERSION;

    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon className={classes.hamburgerIcon}/>
            </IconButton>
            <Typography className={classes.appTitle} variant="h5">
              {title}
            </Typography>
            <label className={classes.version}>v{version}</label>
          </Toolbar>
        </AppBar>
        <DrawerMenu open={openDrawer} onClose={this.toggleDrawer}/>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FullAppBar);
