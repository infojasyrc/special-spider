import { getAppCollections } from './base'

import { Conference } from './../../entities'

function ConferenceAPI() {
  const collectionName = 'events'

  const getAll = async (): Promise<Conference[]> => {
    const events = await getAppCollections(collectionName)
    const conferences: Conference[] = events.map(event => (event as Conference))
    return conferences
  }

  return {
    getAll,
  }
}

export default ConferenceAPI
