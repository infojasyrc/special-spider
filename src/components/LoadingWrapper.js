import React, {Component} from 'react';
import {CircularProgress} from '@material-ui/core';

export default class LoadingWrapper extends Component {
  render() {
    const {children, loading, middlePosition} = this.props;
    return (
      <div style={{
        position: 'relative'
      }}>
        {loading && <CircularProgress
          size={20}
          style={{
          position: 'absolute',
          top: middlePosition.top,
          left: middlePosition.left
        }}/>}
        {children}
      </div>
    );
  }
}