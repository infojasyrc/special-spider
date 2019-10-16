import React, {Component} from 'react';
import { List } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import LeftMenuOption from './../LeftMenuOption/LeftMenuOption';

class LeftMenu extends Component {
  render() {
    const {userContext} = this.props;
    const {isAdmin} = userContext.user;
    let adminOptions = null;

    if (isAdmin) {
      adminOptions = <React.Fragment>
        <LeftMenuOption
          path="/users"
          title="Users"
          iconComponent={<AccountCircleIcon/>}
        />
        <LeftMenuOption
          path="/export-attendees"
          title="Export Attendees"
          iconComponent={<DownloadIcon/>}
        />
      </React.Fragment>;
    }

    return (
      <List>
        <LeftMenuOption
          path="/user/change-password"
          title="Change Password"
          iconComponent={<VpnKeyIcon/>}
        />
        {adminOptions}
      </List>
    );
  }
}

export default LeftMenu;
