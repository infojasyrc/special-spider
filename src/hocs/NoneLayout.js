import React, { Component } from 'react'
import LayoutContext, { LayoutTypes } from '../shared/contexts/Layout'

class NoneLayout extends Component {
  componentDidMount() {
    const { changeLayout } = this.context
    changeLayout(LayoutTypes.NONE)
  }

  render() {
    const { children } = this.props
    return <React.Fragment>{children}</React.Fragment>
  }
}
NoneLayout.contextType = LayoutContext

export default NoneLayout
