import { UserRole } from '../../entities'
import { getAppCollections } from './base'

function RolesAPI() {
  const collectionName = 'roles'

  const getAll = async (): Promise<UserRole[]> => {
    const roles = await getAppCollections(collectionName)
    return roles as UserRole[]
  }

  return {
    getAll,
  }
}

export default RolesAPI
