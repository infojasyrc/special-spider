import { render, screen } from '@testing-library/react'

import EventView, { EventViewProps } from './EventView'

const renderComponent = (props: EventViewProps) =>
  render(<EventView {...props} />)

describe('event view component', () => {
  it('should render all elements', () => {
    const props: EventViewProps = {
      headquarters: [],
      eventType: '',
    }
    renderComponent(props)

    const salesEventType = screen.getByRole('radio', { name: /sales/i })
    expect(salesEventType).toBeInTheDocument()
  })
})
