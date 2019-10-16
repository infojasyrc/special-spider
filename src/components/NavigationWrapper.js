import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavigationWrapper extends Component {
  render() {
    return (
      <Link style={{
        textDecoration: 'none'
      }} to={this.props.path}>{this.props.children}</Link>
    );
  }
}
