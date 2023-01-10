import { ChangeEvent, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

import { getCurrentYear } from '../../tools'

export default function YearFilter(): JSX.Element {
  const [selectedYear, setSelectedYear] = useState<string | unknown>('')

  const currentYear = parseInt(getCurrentYear())
  const nextYear = currentYear + 1
  const pastYear = currentYear - 1

  const allYears = [nextYear, currentYear, pastYear]

  const handleYearChanged = (e: ChangeEvent<{ value: unknown }>) => {
    setSelectedYear(e.target.value)
  }

  return (
    <FormControl>
      <InputLabel htmlFor="select-year">Show</InputLabel>
      <Select
        inputProps={{
          name: 'select-year',
          id: 'select-year',
        }}
        value={selectedYear}
        onChange={handleYearChanged}
        data-testid="dropdownYearFilter"
      >
        {allYears.map((year, index) => (
          <MenuItem key={index} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}