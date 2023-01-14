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

export type CustomDropdownProps = {
  elements: string[]
  title: string
  onChange: (selectedYear: string) => void
  htmlId?: string
  htmlName?: string
}

export default function CustomDropdown({
  title,
  elements,
  onChange,
  htmlId = 'custom-dropdown',
  htmlName = 'custom-dropdown',
}: CustomDropdownProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState('')
  const classes = useStyles()

  const handleOnChanged = (e: ChangeEvent<{ value: unknown }>) => {
    setSelectedOption(e.target.value as string)
    onChange(e.target.value as string)
  }

  return (
    <FormControl className={classes.section}>
      <InputLabel htmlFor={htmlName} className={classes.title}>
        {title}
      </InputLabel>
      <Select
        className={classes.customDropdown}
        inputProps={{
          name: htmlName,
          id: htmlId,
        }}
        value={selectedOption}
        onChange={handleOnChanged}
        data-testid="dropdownCustomDropdown"
      >
        {elements.map((year, index) => (
          <MenuItem key={index} value={year} className={classes.optionDropdown}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
