import React, {Component} from 'react';
import {Button, withStyles} from '@material-ui/core';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const styles = theme => ({
  leftArrow: {
    position: 'absolute',
    top: '2.5%',
    left: '0.5em',
    height: '95%',
    zIndex: 2
  }
});

class LeftArrow extends Component {
  render() {
    const {classes, onClick} = this.props;

    return (
      <Button className={classes.leftArrow} onClick={onClick}>
        <LeftIcon fontSize="large"/>
      </Button>
    );
  }
}

export default withStyles(styles)(LeftArrow);