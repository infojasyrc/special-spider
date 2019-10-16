import React, {Component} from 'react';
import {LayoutContext, LayoutTypes} from '../contexts/LayoutContext';

class NoneLayout extends Component {
  componentDidMount() {
    const {change} = this.context;
    change(LayoutTypes.NONE);
  }

  render() {
    const {children} = this.props;
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}
NoneLayout.contextType = LayoutContext;

export default NoneLayout;