import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core';

import {styles} from './../../styles/FormButtons';

class FormButtons extends Component {

  handleSaveButton = () => {
    const {onSaveClick} = this.props;

    if (!onSaveClick) {
      return;
    }

    onSaveClick();
  }

  handleCancelButton = () => {
    const {onCancelClick} = this.props;

    if (!onCancelClick) {
      return;
    }

    onCancelClick();
  }

  render() {
    const {classes, enableSave} = this.props;

    return (
      <div className={classes.sectionFormButtons}>
        <Button
          variant="outlined"
          className={classes.secondaryButton}
          color="secondary"
          onClick={this.handleCancelButton}>
          Cancel
        </Button>
        <Button
          variant="contained"
          classes={{
          root: classes.primaryButton,
          disabled: classes.primaryButtonDisabled
        }}
          disabled={!enableSave}
          onClick={this.handleSaveButton}>
          Save
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(FormButtons);
