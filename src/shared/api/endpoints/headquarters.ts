import { Headquarter } from '../../entities'
import { getAppCollections } from './base'

function HeadquarterAPI() {
  const collectionName = 'headquarters'

  const getAll = async (): Promise<Headquarter[]> => {
    const headquarters = await getAppCollections(collectionName)
    return headquarters as Headquarter[]
  }

  return {
    getAll,
  }
}

export default HeadquarterAPI
