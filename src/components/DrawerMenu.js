import React, {Component} from 'react';
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';

import LogoutIcon from '@material-ui/icons/ExitToAppRounded';

import SecurityApi from '../api/security';

import LeftMenu from './../components/LeftMenu/LeftMenu.jsx';
import {withUserContext} from '../hocs/UserContext';
import {withMessage} from '../hocs/Snackbar';
import {styles} from '../styles/DrawerMenu';

class DrawerMenu extends Component {
  constructor(props) {
    super(props);

    this.api = new SecurityApi();
  }

  handleLogout = () => {
    const {showMessage, hideMessage, userContext} = this.props;
    showMessage('Logging out');

    this.api.logout()
      .then(() => {
        hideMessage();
        userContext.logout();
      })
      .catch(error => {
        console.error(error);
        hideMessage();
      });
  }

  renderAvatar = () => {
    const {classes, userContext} = this.props;
    const {avatarUrl} = userContext.user;

    if (!avatarUrl || avatarUrl === '') {
      return (<AccountCircleIcon className={classes.userImage}/>)
    }

    return (<Avatar className={classes.userImage} alt="user" src={avatarUrl}/>);
  }

  render() {
    const {classes, open, userContext, onClose} = this.props;
    const {fullName, role, isAdmin} = userContext.user;

    if (!userContext.isLoggedIn) {
      return null;
    }

    const roleName = isAdmin ? `${'Admin'} - ${role.name}` : role.name;

    return (
      <Drawer open={open} onClose={onClose}>
        <div className={classes.drawerTop}>
          {this.renderAvatar()}
          <div>
            <label className={classes.userName}>{fullName}</label>
          </div>
          <div>
            <label className={classes.role}>{roleName}</label>
          </div>
        </div>
        <div className={classes.drawerMiddle}>
          <LeftMenu userContext={userContext}/>
        </div>
        <div className={classes.drawerBottom}>
          <List>
            <ListItem button onClick={this.handleLogout}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="Logout"/>
            </ListItem>
          </List>
        </div>
      </Drawer>
    )
  }
}

export default withMessage(withUserContext(withStyles(styles)(DrawerMenu)));
