import { useEffect, useState } from 'react'

import UserList from '../../components/UserList/UserList'

import { UsersAPI } from '../../shared/api'
import { User } from '../../shared/entities'

export default function UsersPage(): JSX.Element {
  const [loading, setLoading] = useState(true)
  const [allUsers, setAllUsers] = useState<User[]>([])

  const apiUsers = UsersAPI()

  useEffect(() => {
    fetchData()
    /* eslint-disable */
  }, [])

  const fetchData = () => {
    setLoading(true)

    apiUsers.getAll()
      .then((users) => {
        setAllUsers(users)
      })
      .catch((error) => {
        console.log('Error retrieving all users')
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) {
    return <>Loading users...</>
  }

  return <>{!loading && <UserList users={allUsers} />}</>
}
