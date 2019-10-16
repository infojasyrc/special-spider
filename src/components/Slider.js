import React, {Component} from 'react';
import {withStyles, Slide, Button} from '@material-ui/core';
import SlideChild from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import TimerButton from './TimerButton';

const styles = theme => ({
  slider: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: theme.colors.dark
  },
  sliderWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0
  },
  debugDiv: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  formButton: {
    position: 'absolute',
    width: '9em',
    bottom: '2.5em',
    right: '4em',
    padding: '0.5em',
    zIndex: 2
  }
});

class Slider extends Component {
  constructor(props) {
    super(props);

    const images = props
      .images
      .map((image) => {
        return {url: image.url, translateX: 0};
      });

    this.state = {
      images: images,
      currentIndex: 0,
      direction: 'left',
      showButtons: props.startPaused
    };
  }

  getSlideWidth = () => {
    return document
      .querySelector('div[dataid="slide"]')
      .clientWidth;
  }

  handleMoveNextClicked = () => {
    const {images, currentIndex} = this.state;

    if (images.length - 1 === currentIndex) {
      this.setState({currentIndex: 0, direction: 'left'});
      return;
    }

    this.setState({
      currentIndex: currentIndex + 1,
      direction: 'left'
    });
  }

  handleMovePreviousClicked = () => {
    const {images, currentIndex} = this.state;

    if (currentIndex === 0) {
      this.setState({
        currentIndex: images.length - 1,
        direction: 'right'
      });
      return;
    }

    this.setState({
      currentIndex: currentIndex - 1,
      direction: 'right'
    });
  }

  handlePlayPauseClicked = () => {
    const {showButtons} = this.state;
    this.setState({
      showButtons: !showButtons
    })
  }

  renderMaterialSlides = () => {
    const {images, currentIndex, direction} = this.state;

    const components = images.map((image, index) => {
      if (index === currentIndex) {
        return (
          <Slide key={index} direction={direction} in={true} timeout={500}>
            <SlideChild
              index={index}
              image={image.url}
              isEntering={true}
              style={{
              zIndex: 1
            }}/>
          </Slide>
        );
      }

      if (direction === 'left') {
        if (currentIndex === 0 && index === images.length - 1) {
          return (<SlideChild key={index} index={index} image={image.url} isEntering={false}/>);
        }

        if (index + 1 === currentIndex) {
          return (<SlideChild key={index} index={index} image={image.url} isEntering={false}/>);
        }
      }

      if (direction === 'right') {
        if (index === 0 && currentIndex === images.length - 1) {
          return (<SlideChild key={index} index={index} image={image.url} isEntering={false}/>);
        }

        if (currentIndex + 1 === index) {
          return (<SlideChild key={index} index={index} image={image.url} isEntering={false}/>);
        }
      }

      return null;
    });

    return components;
  }

  render() {
    const {showButtons} = this.state;
    const {classes, startPaused, onFormClicked} = this.props;

    const buttons = [];

    buttons.push(
      <Button
        key="form-button"
        className={classes.formButton}
        variant="contained"
        color="primary"
        size="large"
        onClick={onFormClicked}>
        Registrate
      </Button>
    );

    if (showButtons) {
      buttons.push(<LeftArrow key="left" onClick={this.handleMovePreviousClicked}/>);
      buttons.push(<RightArrow key="right" onClick={this.handleMoveNextClicked}/>);
    }

    return (
      <div className={classes.slider}>
        {this.renderMaterialSlides()}
        {buttons}
        <TimerButton
          startPaused={startPaused}
          time={8000}
          onClick={this.handlePlayPauseClicked}
          onTimer={this.handleMoveNextClicked}/>
      </div>
    );
  }
}

export default withStyles(styles)(Slider);