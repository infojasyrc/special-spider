import { getAppCollections } from './base'

function HeadquarterAPI() {
  const collectionName = 'headquarters'

  const getAll = async () => {
    const headquarters = await getAppCollections(collectionName)
    return headquarters
  }

  return {
    getAll,
  }
}

export default HeadquarterAPI
