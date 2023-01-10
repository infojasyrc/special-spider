import { ChangeEvent, useState } from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
  createStyles,
} from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    sortBy: {
      marginLeft: '1em',
    },
  })
)

export type SortFilterProps = {
  onChange: (selectedSort: string) => void
}

export default function SortFilter({ onChange }: SortFilterProps): JSX.Element {
  const [sortBy, setSortBy] = useState('')
  const classes = useStyles()

  const handleSortByChanged = (e: ChangeEvent<{ value: unknown }>) => {
    setSortBy(e.target.value as string)
    onChange(e.target.value as string)
  }

  return (
    <FormControl className={classes.sortBy}>
      <InputLabel htmlFor="sorter">Sort dates</InputLabel>
      <Select
        inputProps={{
          name: 'sorter',
          id: 'sorter',
        }}
        value={sortBy}
        onChange={handleSortByChanged}
        data-testid="dropdownSortByFilter"
      >
        <MenuItem value={'oldest'}>Ascending</MenuItem>
        <MenuItem value={'newest'}>Descending</MenuItem>
      </Select>
    </FormControl>
  )
}
