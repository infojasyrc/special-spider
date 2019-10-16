import {baseStyles} from './Base';

export const styles = theme => ({
  hamburgerIcon: {
    color: theme.colors.white
  },
  appTitle: baseStyles(theme).barTitle,
  version: {
    color: theme.colors.transparentWhite,
    position: 'absolute',
    top: '0',
    right: '1em',
    fontSize: 'xx-small'
  }
});