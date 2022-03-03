import { useState } from 'react'
import { createStyles, makeStyles, Grid } from '@material-ui/core'

import EventTypes from '../EventTypes/EventTypes'

import { Headquarter } from '../../shared/entities'

const useStyles = makeStyles(() =>
  createStyles({
    container: { border: '1px solid #c00' },
    textField: {},
    wideInput: {},
  })
)

export interface EventViewProps {
  headquarters: Headquarter[]
  eventType: string
}

export default function EventView({ eventType }: EventViewProps): JSX.Element {
  const [selectedEventType, setSelectedEventType] = useState(eventType)

  const classes = useStyles()

  const updateEventType = (selectedEventType: string) => {
    setSelectedEventType(selectedEventType)
  }

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={6}>
        {/* <TextFieldWithValidation
          id="name"
          className={classes.textField}
          required={true}
          label="Title"
          value={name}
          error={validation.name.error}
          errorMessage={validation.name.message}
          onChange={this.handleTextChanged}
          onBlur={this.handleRequiredFieldBlurred}
        /> */}
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* {this.renderHeadquarters()} */}
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* {this.renderUsers()} */}
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* <TextFieldWithValidation
          id="date"
          className={classes.textField}
          required={true}
          label="Date"
          value={date}
          error={validation.date.error}
          errorMessage={validation.date.message}
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.handleDateChanged}
          onBlur={this.handleRequiredFieldBlurred}
        /> */}
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* <TextField
          name="placeName"
          className={classes.textField}
          label="Place"
          value={placeName}
          margin="dense"
          onChange={this.handleTextChanged}
        /> */}
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* <TextField
          name="address"
          className={classes.textField}
          label="Address"
          value={address}
          margin="dense"
          onChange={this.handleTextChanged}
        /> */}
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* <TextField
          name="phoneNumber"
          className={classes.textField}
          label="Phone"
          value={phoneNumber}
          margin="dense"
          onChange={this.handleTextChanged}
        /> */}
      </Grid>
      <Grid item xs={12} sm={6}>
        <EventTypes
          selectedEventType={selectedEventType}
          onUpdateEventType={updateEventType}
        />
      </Grid>
    </Grid>
  )
}
