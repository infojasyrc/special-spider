import React, {Component} from 'react';
import {Button, withStyles} from '@material-ui/core';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  rightArrow: {
    position: 'absolute',
    top: '2.5%',
    right: '0.5em',
    height: '95%',
    zIndex: 2
  }
});

class RightArrow extends Component {
  render() {
    const {classes, onClick} = this.props;

    return (
      <Button className={classes.rightArrow} onClick={onClick}>
        <RightIcon fontSize="large"/>
      </Button>
    );
  }
}

export default withStyles(styles)(RightArrow);