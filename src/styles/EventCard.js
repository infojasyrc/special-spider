export const styles = theme => ({
  card: {
    width: '100%',
    height: '20em',
    overflow: 'hidden',
    position: 'relative'
  },
  cardGridItem: {
    padding: '0.5em'
  },
  image: {
    width: '100%',
    height: '20em',
    objectFit: 'cover'
  },
  location: {
    position: 'absolute',
    top: '1em',
    left: '1em',
    backgroundColor: theme.colors.dark,
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    borderRadius: '5%',
    color: theme.colors.white
  },
  locationName: {
    marginTop: '1em',
    marginBottom: '1em',
    marginLeft: '0.5em',
    marginRight: '0.5em'
  },
  date: {
    position: 'absolute',
    top: '1em',
    right: '1em',
    backgroundColor: theme.colors.white,
    paddingTop: '0.25em',
    paddingBottom: '0.25em',
    paddingLeft: '1em',
    paddingRight: '1em',
    borderRadius: '5%'
  },
  day: {
    color: theme.colors.orange,
    fontFamily: 'Exo',
    margin: 0,
    textAlign: 'center'
  },
  month: {
    textTransform: 'uppercase',
    fontFamily: 'Exo',
    margin: 0
  },
  bottom: {
    position: 'absolute',
    bottom: '0',
    height: '25%',
    width: '100%',
    padding: '1em',
    backgroundColor: theme.colors.transparentBlack
  },
  title: {
    color: theme.colors.white,
    overflow: 'hidden',
    fontFamily: 'Exo',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginRight: '1em',
    margin: 0
  },
  status: {
    position: 'absolute',
    bottom: '0.5em',
    right: '2.5em',
    backgroundColor: theme.colors.white,
    paddingTop: '0.15em',
    paddingBottom: '0.15em',
    paddingRight: '1em',
    paddingLeft: '1em',
    borderRadius: '5%'

  },
  statusCreated: {
    backgroundColor: theme.colors.green
  },
  statusOpen: {
    backgroundColor: theme.colors.blue
  },
  statusOnPause: {
    backgroundColor: theme.colors.white
  },
  statusClosed: {
    backgroundColor: theme.colors.red
  },
  statusName: {
    color: theme.colors.white,
    textTransform: 'uppercase',
    fontFamily: 'Exo',
    lineHeight: '1.5em'
  },
  statusNameContrast: {
    color: theme.colors.dark
  }
});