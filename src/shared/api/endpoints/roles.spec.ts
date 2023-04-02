import { UserRole } from '../../entities'

import RolesAPI from './roles'

const mockFn = jest.fn()
jest.mock('./base', () => ({
  getAppCollections: () => mockFn(),
}))

describe('roles api call', () => {
  it('should get all', async () => {
    const mockResult: UserRole[] = [
      {
        id: '01',
        name: 'Role A',
      },
      {
        id: '02',
        name: 'Role B',
      },
    ]
    mockFn.mockResolvedValue(mockResult)

    const api = RolesAPI()
    const result = await api.getAll()
    expect(result.length).toBe(mockResult.length)
  })
})
