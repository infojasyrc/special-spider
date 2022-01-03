import { createStyles, makeStyles, Typography } from '@material-ui/core'

import { ConferenceStatus } from '../../shared/entities'

import { colors } from '../../styles/theme/colors'

const useStyles = makeStyles(() =>
  createStyles({
    status: {
      position: 'absolute',
      bottom: '0.5em',
      right: '2.5em',
      backgroundColor: colors.white,
      paddingTop: '0.15em',
      paddingBottom: '0.15em',
      paddingRight: '1em',
      paddingLeft: '1em',
      borderRadius: '5%',
    },
    statusCreated: {
      backgroundColor: colors.green,
    },
    statusOpen: {
      backgroundColor: colors.blue,
    },
    statusOnPause: {
      backgroundColor: colors.white,
    },
    statusClosed: {
      backgroundColor: colors.red,
    },
    statusName: {
      color: colors.white,
      textTransform: 'uppercase',
      fontFamily: 'Exo',
      lineHeight: '1.5em',
    },
    statusNameContrast: {
      color: colors.dark,
    },
  })
)

export interface ConferenceStatusSectionProps {
  status: ConferenceStatus
}

export default function ConferenceStatusSection({
  status,
}: ConferenceStatusSectionProps): JSX.Element {
  const classes = useStyles()

  const getStatusNameClasses = () => {
    const statusNameClasses = [classes.statusName]

    if (status === 'paused') {
      statusNameClasses.push(classes.statusNameContrast)
    }

    return statusNameClasses
  }

  const getStatusClasses = () => {
    const statusClasses = [classes.status]

    if (status === 'created') {
      statusClasses.push(classes.statusCreated)
    }

    if (status === 'opened') {
      statusClasses.push(classes.statusOpen)
    }

    if (status === 'paused') {
      statusClasses.push(classes.statusOnPause)
    }

    if (status === 'closed') {
      statusClasses.push(classes.statusClosed)
    }

    return statusClasses
  }

  return (
    <div
      data-testid="conference-status-section"
      className={getStatusClasses().join(' ')}
    >
      <Typography className={getStatusNameClasses().join(' ')}>
        {status}
      </Typography>
    </div>
  )
}
