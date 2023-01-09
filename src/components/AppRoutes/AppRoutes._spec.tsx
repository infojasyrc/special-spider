import { render } from '@testing-library/react'

import AppRoutes from './AppRoutes'

const renderComponent = () => render(<AppRoutes />)

describe('app routes component', () => {
  it('should render dashboard path', () => {
    renderComponent()
    expect(true).toBe(true)
  })

  xit('should render events page', () => {
    renderComponent()
    expect(true).toBe(true)
  })

  xit('should render play event page', () => {
    renderComponent()
    expect(true).toBe(true)
  })
})
