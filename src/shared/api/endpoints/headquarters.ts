import { getAppCollections } from './base'

function Headquarter() {
  const collectionName = 'headquarters'

  const getAll = async () => {
    const headquarters = await getAppCollections(collectionName)
    return headquarters
  }

  return {
    getAll,
  }
}

export default Headquarter
