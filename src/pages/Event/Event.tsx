import { useEffect, useState } from 'react'

import EventView from '../../components/EventView/EventView'

import { HeadquarterAPI } from '../../shared/api'

import { Headquarter } from '../../shared/entities'

export default function EventPage(): JSX.Element {
  const [allHeadquarters, setAllHeadquarters] = useState<Headquarter[]>([])
  const [loading, setLoading] = useState(false)

  const apiHeadquarters = HeadquarterAPI()

  const fetchHeadquarters = () => {
    setLoading(true)
    apiHeadquarters
      .getAll()
      .then((headquarters) => {
        setAllHeadquarters(headquarters)
      })
      .catch((error) => {
        console.log('Error retrieving all headquarters')
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchHeadquarters()
    /* eslint-disable */
  }, [])

  const onChangeEventName = () => {}
  const onChangeEventDate = () => {}
  const onChangeAddress = () => {}
  const onChangePhoneNumber = () => {}

  return (
    <EventView
      eventType=""
      eventName=""
      eventDate=""
      address=""
      phoneNumber=""
      headquarters={allHeadquarters}
      headquarter=""
      isLoading={loading}
      validation={{
        name: { error: false, message: '' },
        date: { error: false, message: '' },
      }}
      onChangeEventName={onChangeEventName}
      onChangeEventDate={onChangeEventDate}
      onChangeAddress={onChangeAddress}
      onChangePhoneNumber={onChangePhoneNumber}
    />
  )
}
