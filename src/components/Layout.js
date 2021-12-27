import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import { styles } from '../styles/Layout'

import { withUserContext } from '../hocs/UserContext'
import LayoutContext, { LayoutTypes } from '../shared/contexts/Layout'
import FullAppBar from './FullAppBar'
import NavigationBar from './NavigationBar'
import Login from './Login'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showDrawer: false,
    }
  }

  renderAppBarWithDrawer = () => {
    const { title } = this.context
    return <FullAppBar title={title} />
  }

  renderNavigationBar = () => {
    const { title, showLogo } = this.context
    return <NavigationBar title={title} showLogo={showLogo} />
  }

  renderLayout = () => {
    let barLayout = null
    const { layout } = this.context

    if (layout === LayoutTypes.FULL) {
      barLayout = this.renderAppBarWithDrawer()
    }

    if (layout === LayoutTypes.NAVIGATION) {
      barLayout = this.renderNavigationBar()
    }

    return barLayout
  }

  render() {
    const { children, classes, userContext } = this.props
    const classNames = [classes.innerContainer]
    const { layout } = this.context

    if (layout === LayoutTypes.NONE) {
      classNames.push(classes.full)
    }

    if (!userContext.isLoggedIn) {
      return (
        <Paper className={classes.mainContainer}>
          <div className={classNames.join(' ')}>
            <Login />
          </div>
        </Paper>
      )
    }

    return (
      <React.Fragment>
        {this.renderLayout()}
        <Paper className={classes.mainContainer}>
          <div className={classNames.join(' ')}>{children}</div>
        </Paper>
      </React.Fragment>
    )
  }
}

Layout.contextType = LayoutContext

export default withUserContext(withStyles(styles)(Layout))
