import UsersAPI from './users'

import { User, UserInApp } from '../../entities'

const mockFn = jest.fn()
jest.mock('./base', () => ({
  filterByInCollections: () => mockFn(),
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
  })
})
