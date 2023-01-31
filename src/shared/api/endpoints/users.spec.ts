import UsersAPI from './users'

import { User, UserInApp } from '../../entities'

const mockFn = jest.fn()
const mockGetAppCollections = jest.fn()
jest.mock('./base', () => ({
  filterByInCollections: () => mockFn(),
  getAppCollections: () => mockGetAppCollections(),
}))

describe('get users data', () => {
  describe('filter by UID', () => {
    it('should get a success response', async () => {
      const userUID = 'abcdef'
      const docID = '1234'
      const mockUser: User = {
        uid: userUID,
        firstName: 'Juan',
        lastName: 'Perez',
        isAdmin: true,
        email: 'email@test.com',
      }

      const docs = [
        {
          id: docID,
          data: () => mockUser,
        },
      ]

      const mockResult = {
        size: docs.length,
        docs,
      }

      mockFn.mockResolvedValue(mockResult)

      const api = UsersAPI()
      const result = (await api.filterByUID(userUID)) as UserInApp
      expect(result.uid).toBe(userUID)
    })

    it('should get all', async () => {
      const mockUser01: User = {
        uid: '00001',
        firstName: 'Juan',
        lastName: 'Perez',
        isAdmin: true,
        email: 'email@test.com',
      }
      const mockUser02: User = {
        uid: '00002',
        firstName: 'Juan',
        lastName: 'Perez',
        isAdmin: true,
        email: 'email@test.com',
      }

      const mockResult: User[] = [
        mockUser01,
        mockUser02,
      ]
      mockGetAppCollections.mockResolvedValue(mockResult)

      const api = UsersAPI()
      const result = (await api.getAll()) as User[]
      expect(result.length).toBe(mockResult.length)
    })
  })
})
