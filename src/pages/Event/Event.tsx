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

  return (
    <EventView
      eventType=""
      headquarters={allHeadquarters}
      headquarter=""
      isLoading={loading}
    />
  )
}
