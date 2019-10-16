import React, {Component} from 'react';
import {withStyles, IconButton} from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const styles = theme => ({
  timerButton: {
    position: 'absolute',
    bottom: '1em',
    left: '47.5%',
    zIndex: 2,
    backgroundColor: theme.colors.transparentBlack,
    color: theme.colors.white,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.colors.white

  }
});

class TimerButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.startPaused
        ? 'stopped'
        : 'playing'
    };

    this.timer = null;
  }

  componentDidMount() {
    const {status} = this.state;

    if (status !== 'playing') {
      return;
    }

    const {onTimer, time} = this.props;
    this.timer = setInterval(onTimer, time);
  }

  handlePlayClicked = (e) => {
    e.preventDefault();

    const {onTimer, time, onClick} = this.props;

    onClick();
    onTimer();

    this.setState({status: 'playing'});
    this.timer = setInterval(onTimer, time);
  }

  handlePauseClicked = (e) => {
    e.preventDefault();

    const {onClick} = this.props;

    onClick();

    this.setState({status: 'paused'});
    clearInterval(this.timer);
  }

  render() {
    const {classes} = this.props;
    const {status} = this.state;

    if (status === 'stopped' || status === 'paused') {
      return (
        <IconButton className={classes.timerButton} onClick={this.handlePlayClicked}>
          <PlayIcon fontSize="large"/>
        </IconButton>
      );
    }

    if (status === 'playing') {
      return (
        <IconButton className={classes.timerButton} onClick={this.handlePauseClicked}>
          <PauseIcon fontSize="large"/>
        </IconButton>
      );
    }

    return null;
  }
}

export default withStyles(styles)(TimerButton);