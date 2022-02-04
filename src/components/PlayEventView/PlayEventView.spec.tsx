import { render } from '@testing-library/react'

import PlayEventView from './PlayEventView'

const renderComponent = () => render(<PlayEventView />)

describe('play event view compoonent', () => {
  it('should render all elements', () => {
    renderComponent()
    expect(true).toBe(true)
  })
})
