import { ChangeEvent, useState } from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
  createStyles,
} from '@material-ui/core'

import { getCurrentYear } from '../../tools'

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      border: '0px solid #1cc',
      width: '100%',
      fontSize: '12px',
    },
    title: {
      fontSize: '12px',
    },
    customDropdown: {
      width: 'auto',
      fontSize: '12px',
    },
    optionDropdown: {
      fontSize: '12px',
    },
  })
)

export type YearFilterProps = {
  onChange: (selectedYear: string) => void
}

export default function YearFilter({ onChange }: YearFilterProps): JSX.Element {
  const [selectedYear, setSelectedYear] = useState('')
  const classes = useStyles()

  const currentYear = parseInt(getCurrentYear())
  const nextYear = currentYear + 1
  const pastYear = currentYear - 1

  const allYears = [nextYear, currentYear, pastYear]

  const handleYearChanged = (e: ChangeEvent<{ value: unknown }>) => {
    setSelectedYear(e.target.value as string)
    onChange(e.target.value as string)
  }

  return (
    <FormControl className={classes.section}>
      <InputLabel htmlFor="select-year" className={classes.title}>
        Year
      </InputLabel>
      <Select
        className={classes.customDropdown}
        inputProps={{
          name: 'select-year',
          id: 'select-year',
        }}
        value={selectedYear}
        onChange={handleYearChanged}
        data-testid="dropdownYearFilter"
      >
        {allYears.map((year, index) => (
          <MenuItem key={index} value={year} className={classes.optionDropdown}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
