export const styles = theme => ({
  mainContainer: {
    ...theme.mainContainer
  },
  innerContainer: {
    marginTop: '5em',
    marginBottom: '5em',
    marginRight: '5em',
    marginLeft: '5em',
    [
      theme
        .breakpoints
        .down('sm')
    ]: {
      marginRight: '1.5em',
      marginLeft: '1.5em'
    },

    overflow: 'auto',
    backgroundColor: theme.colors.lightGray
  },
  full: {
    margin: '0',
    height: '100%',
    width: '100%'
  }
});