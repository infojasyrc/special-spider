export const baseStyles = (theme) => {
  return {
    barTitle: {
      marginLeft: '0',
      fontFamily: 'Exo',
      color: theme.colors.white,
      [
        theme
          .breakpoints
          .down("xs")
      ]: {
        display: 'none'
      }
    },
    primaryButton: {
      position: 'fixed',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2.75
    },
    secondaryButton: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 11.75
    },
    textField: {
      display: 'flex',
      marginTop: theme.spacing.unit,
      marginRight: theme.spacing.unit * 2
    },
    wideInput: {}
  };
}
