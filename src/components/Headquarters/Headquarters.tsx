import React, { useState } from 'react'
import { Grid, MenuItem, Select } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { Headquarter } from '../../shared/entities'

const useStyles = makeStyles(() =>
  createStyles({
    headquarterFilterLabel: {
      fontWeight: 'bold',
      marginRight: '1em',
    },
    headquarterSelect: {
      width: '15em',
    },
  })
)

export interface HeadquartersProps {
  loading: boolean
  allHeadquarters: Headquarter[]
  selectedHeadquarter?: string
  onChangeHeadquarter: (headquarter: string) => void
}

export default function Headquarters({
  loading,
  allHeadquarters,
  onChangeHeadquarter,
  selectedHeadquarter = '-1',
}: HeadquartersProps): JSX.Element {
  const [currentSelectedHeadquarter, setCurrentSelectedHeadquarter] =
    useState(selectedHeadquarter)
  const classes = useStyles()

  const handleHeadquarterChanged = (
    e: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCurrentSelectedHeadquarter(e.target.value as string)
    onChangeHeadquarter(e.target.value as string)
  }

  if (loading) {
    return <h4>Loading HQs</h4>
  }

  const defaultItem = (
    <MenuItem data-testid="option-headquarter-default" value="-1">
      Choose a Headquarter
    </MenuItem>
  )

  const items = allHeadquarters.map((headquarter, index) => {
    return (
      <MenuItem
        data-testid={'option-headquarter-' + index}
        key={index}
        value={headquarter.id}
      >
        {headquarter.name}
      </MenuItem>
    )
  })

  return (
    <Grid item xs={10} sm={8}>
      <Select
        data-testid="list-headquarters"
        inputProps={{
          name: 'list-headquarters',
          id: 'list-headquarters',
          'aria-label': 'list-headquarters',
        }}
        label="Choose a headquarter"
        className={classes.headquarterSelect}
        value={currentSelectedHeadquarter}
        onChange={handleHeadquarterChanged}
      >
        {defaultItem}
        {items}
      </Select>
    </Grid>
  )
}
