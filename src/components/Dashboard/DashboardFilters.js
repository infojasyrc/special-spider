import React, { Component } from 'react'
import {
  withStyles,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'

import { getCurrentYear } from '../../tools'

import { styles } from '../../styles/DashboardFilters'

class DashboardFilters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allYears: [],
      selectedYear: '',
      sortBy: '',
    }
  }

  componentDidMount() {
    this.loadFilters()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.selectedYear !== this.state.selectedYear ||
      prevState.sortBy !== this.state.sortBy
    ) {
      this.props.changeFilters({
        year: this.state.selectedYear,
        sortBy: this.state.sortBy,
      })
    }
  }

  getSelectableYears = () => {
    const currentYear = parseInt(getCurrentYear())
    const nextYear = currentYear + 1
    const pastYear = currentYear - 1

    const { allYears } = this.state

    allYears.push(nextYear, currentYear, pastYear)
    return { allYears: allYears, currentYear: currentYear }
  }

  loadFilters() {
    const { allYears, currentYear } = this.getSelectableYears()
    this.setState({ allYears, selectedYear: currentYear, sortBy: 'oldest' })
  }

  handleYearChanged = (e) => {
    this.setState({ selectedYear: e.target.value })
  }

  renderYears = () => {
    const { allYears, selectedYear } = this.state

    const items = allYears.map((year, index) => {
      return (
        <MenuItem key={index} value={year}>
          {year}
        </MenuItem>
      )
    })

    return (
      <FormControl>
        <InputLabel htmlFor="select-year">Show</InputLabel>
        <Select
          inputProps={{
            name: 'select-year',
            id: 'select-year',
          }}
          value={selectedYear}
          onChange={this.handleYearChanged}
        >
          {items}
        </Select>
      </FormControl>
    )
  }

  handleSortByChanged = (e) => {
    this.setState({ sortBy: e.target.value })
  }

  renderSorter = () => {
    const { sortBy } = this.state
    const { classes } = this.props

    return (
      <FormControl className={classes.sortBy}>
        <InputLabel htmlFor="sorter">Sort dates</InputLabel>
        <Select
          inputProps={{
            name: 'sorter',
            id: 'sorter',
          }}
          value={sortBy}
          onChange={this.handleSortByChanged}
        >
          <MenuItem value={'oldest'}>Ascending</MenuItem>
          <MenuItem value={'newest'}>Descending</MenuItem>
        </Select>
      </FormControl>
    )
  }

  render() {
    const { classes } = this.props

    return (
      <Grid item xs={2} sm={4} className={classes.yearSelector}>
        {this.renderYears()}
        {this.renderSorter()}
      </Grid>
    )
  }
}

export default withStyles(styles)(DashboardFilters)
