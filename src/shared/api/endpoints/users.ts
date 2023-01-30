import { User, UserInApp } from '../../entities'
import { filterByInCollections, getAppCollections } from './base'

function UsersAPI() {
  const collectionName = 'users'

  const filterByUID = async (userUID: string): Promise<UserInApp | null> => {
    const filterBy = 'uid'
    const result = await filterByInCollections(
      collectionName,
      filterBy,
      userUID
    )
    if (result.size === 0) {
      return null
    }

    const docData = result.docs[0].data()
    const expectedUser: UserInApp = {
      id: result.docs[0].id,
      uid: docData.uid,
      firstName: docData.firstName,
      lastName: docData.lastName,
      email: docData.email,
      isAdmin: docData.isAdmin,
    }

    return expectedUser
  }

  const getAll = async (): Promise<User[]> => {
    const doList = await getAppCollections(collectionName)
    const users: User[] = doList.map((user) => user as User)
    return users
  }

  return {
    filterByUID,
    getAll,
  }
}

export default UsersAPI
