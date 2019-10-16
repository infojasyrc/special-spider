import {createMuiTheme} from '@material-ui/core/styles';

const colors = {
  orange: '#ff6d00',
  orangeTransparent: '#ff6d007d',
  lightOrange: '#f89937',
  green: '#387b30',
  blue: '#1f6ae2',
  red: '#ff0505',
  dark: '#3c3c3c',
  darkGray: '#567077',
  gray: '#9a9a9a',
  lightGray: '#f6f7f7',
  white: '#ffffff',
  transparentWhite : '#ffffff69',
  transparentBlack: '#0808087d'
}

export const theme = createMuiTheme({
  barTitle: {
    marginLeft: '0',
    fontFamily: 'Exo',
    color: colors.white
  },
  colors: colors,
  palette: {
    primary: {
      main: colors.orange,
      contrastText: colors.white
    },
    secondary: {
      main: colors.lightOrange,
      contrastText: colors.white
    }
  },
  typography: {
    useNextVariants: true
  },
  mainContainer: {
    position: 'fixed',
    backgroundColor: colors.lightGray,
    height: '99.9%',
    width: '100%',
    overflow: 'auto',
    borderRadius: 0
  }
});