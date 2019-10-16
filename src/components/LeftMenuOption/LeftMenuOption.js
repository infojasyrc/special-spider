import React, {Component} from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import NavigationWrapper from './../NavigationWrapper';

class LeftMenuOption extends Component {
  render() {
    const {path, title, iconComponent} = this.props;

    return (
      <NavigationWrapper path={path}>
        <ListItem button>
          <ListItemIcon>
            {iconComponent}
          </ListItemIcon>
          <ListItemText primary={title}/>
        </ListItem>
      </NavigationWrapper>
    );
  }
}

export default LeftMenuOption;
