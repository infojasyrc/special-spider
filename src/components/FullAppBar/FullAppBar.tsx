import { useState } from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

import DrawerMenu from '../DrawerMenu/DrawerMenu'

import { colors } from '../../styles/theme/colors'

const useStyles = makeStyles(() =>
  createStyles({
    hamburgerIcon: {
      color: colors.white,
    },
    appTitle: {},
    version: {
      color: colors.transparentWhite,
      position: 'absolute',
      top: '0',
      right: '1em',
      fontSize: 'xx-small',
    },
  })
)

export interface FullAppBarProps {
  title: string
  version: string
  onLogout: () => void
}

export default function FullAppBar({
  title,
  version,
  onLogout,
}: FullAppBarProps): JSX.Element {
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles()

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton aria-label="Menu" onClick={toggleDrawer}>
            <MenuIcon className={classes.hamburgerIcon} />
          </IconButton>
          <Typography className={classes.appTitle} variant="h5">
            {title}
          </Typography>
          <label className={classes.version}>v{version}</label>
        </Toolbar>
      </AppBar>
      <DrawerMenu
        open={openDrawer}
        onClose={toggleDrawer}
        onLogout={onLogout}
      />
    </>
  )
}
