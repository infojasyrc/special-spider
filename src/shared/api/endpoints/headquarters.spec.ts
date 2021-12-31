import { Headquarter } from '../../entities'

import HeadquarterAPI from './headquarters'

const mockFn = jest.fn()
jest.mock('./base', () => ({
  getAppCollections: () => mockFn(),
}))

describe('headquarters api call', () => {
  it('should get all', async () => {
    const mockResult: Headquarter[] = [
      { id: '01', name: 'Lima' },
      { id: '02', name: 'Piura' },
    ]
    mockFn.mockResolvedValue(mockResult)

    const api = HeadquarterAPI()
    const result = await api.getAll()
    expect(result.length).toBe(mockResult.length)
  })
})
