import CustomDropdown from '../CustomDropdown/CustomDropdown'

export type SortFilterProps = {
  onChange: (selectedSort: string) => void
}

export default function SortFilter({ onChange }: SortFilterProps): JSX.Element {
  const options = [
    { value: 'oldest', title: 'Ascending' },
    { value: 'newest', title: 'Descending' },
  ]

  const handleSortByChanged = (sortBySelected: string) => {
    onChange(sortBySelected)
  }

  return (
    <CustomDropdown
      elements={options}
      title="Sort Dates"
      onChange={handleSortByChanged}
      htmlId="sorter"
      htmlName="sorter"
    />
  )
}
