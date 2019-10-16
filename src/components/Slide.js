import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
  slide: {
    width: '100%',
    height: '100%',
    top: 0,
    position: 'absolute'
  }
})

class Slide extends Component {
  render() {
    const {classes, image, isEntering} = this.props;

    const slideStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%',
      zIndex: isEntering
        ? 1
        : 0
    }

    return (
      <div className={classes.slide} style={slideStyle} dataid="slide"></div>
    );
  }
}

export default withStyles(styles)(Slide);