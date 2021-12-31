import { getAppCollections } from './base'

function ConferenceAPI() {
  const collectionName = 'events'

  const getAll = async () => {
    const events = await getAppCollections(collectionName)
    return events
  }

  return {
    getAll,
  }
}

export default ConferenceAPI
