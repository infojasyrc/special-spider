import { useState } from 'react'
import { createStyles, makeStyles, Grid } from '@material-ui/core'

import EventTypes from '../EventTypes/EventTypes'
import SelectWithLoading from '../DropDown/SelectWithLoading'
import TextFieldWithValidation from '../TextField/TextFieldWithValidation'

import { ConferenceDataValidation, Headquarter } from '../../shared/entities'

const useStyles = makeStyles(() =>
  createStyles({
    container: { border: '1px solid #c00' },
    textField: {},
    wideInput: {},
  })
)

export interface EventViewProps {
  headquarters: Headquarter[]
  headquarter: string
  eventType: string
  eventName: string
  eventDate: string
  validation: ConferenceDataValidation
  isLoading: boolean
  onChangeEventName: () => void
  onChangeEventDate: () => void
}

export default function EventView({
  headquarters,
  headquarter,
  eventType,
  eventName,
  eventDate,
  validation,
  isLoading,
  onChangeEventName,
  onChangeEventDate,
}: EventViewProps): JSX.Element {
  const [selectedEventType, setSelectedEventType] = useState(eventType)

  const classes = useStyles()

  const updateEventType = (selectedEventType: string) => {
    setSelectedEventType(selectedEventType)
  }

  const handleHeadquarterChanged = () => {}

  const handleEventNameChanged = () => {
    onChangeEventName()
  }

  const handleDateChanged = () => {
    onChangeEventDate()
  }

  const handleRequiredFieldBlurred = () => {}

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={6}>
        <TextFieldWithValidation
          id="eventName"
          className={classes.textField}
          required={true}
          label="Title"
          value={eventName}
          error={validation.name.error}
          helperText={validation.name.message}
          onChange={handleEventNameChanged}
          onBlur={handleRequiredFieldBlurred}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextFieldWithValidation
          id="eventDate"
          className={classes.textField}
          required={true}
          label="Date"
          value={eventDate}
          error={validation.date.error}
          helperText={validation.date.message}
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDateChanged}
          onBlur={handleRequiredFieldBlurred}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectWithLoading
          attributeValue={headquarter}
          attributeRequired={true}
          attributeOptions={headquarters}
          attributeName="headquarter"
          attributeLabel="HQ"
          error={false}
          errorMessage=""
          onChange={handleHeadquarterChanged}
          onBlur={handleRequiredFieldBlurred}
          isLoading={isLoading}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* {this.renderUsers()} */}
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
