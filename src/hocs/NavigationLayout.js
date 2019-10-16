import React, {Component} from 'react';
import {LayoutContext, LayoutTypes} from '../contexts/LayoutContext';

class NavigationLayout extends Component {
  componentDidMount() {
    const {change} = this.context;
    const {title, showLogo} = this.props;
    change(LayoutTypes.NAVIGATION, title, showLogo);
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
NavigationLayout.contextType = LayoutContext;

export default NavigationLayout;