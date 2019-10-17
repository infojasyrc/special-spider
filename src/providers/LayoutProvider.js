import React, {Component} from 'react';
import {LayoutContext, LayoutTypes} from '../contexts/LayoutContext';

export default class LayoutProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: LayoutTypes.FULL,
      title: 'Special Spider App',
      showLogo: false,
      action: (params) => {
        return params;
      },
      change: (type, title, showLogo) => {
        this.setState({type: type, title: title, showLogo: showLogo});
      }
    }
  }

  render() {
    const {children} = this.props;

    return (
      <LayoutContext.Provider value={this.state}>
        {children}
      </LayoutContext.Provider>
    );
  }
}