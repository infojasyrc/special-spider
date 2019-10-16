export const styles = theme => ({
  drawerTop: {
    height: '10em',
    width: '15em',
    backgroundColor: theme.colors.orange,
    paddingTop: '1em',
    paddingLeft: '1em'
  },
  drawerMiddle: {},
  drawerBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  userImage: {
    height: 100,
    width: 100
  },
  userName: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 'large'
  },
  role: {
    color: theme.colors.white,
    fontSize: 'medium',
    fontStyle: 'oblique'
  }
});