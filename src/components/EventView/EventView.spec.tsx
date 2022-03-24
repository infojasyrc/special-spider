import { render, screen } from '@testing-library/react'

import EventView, { EventViewProps } from './EventView'

const renderComponent = (props: EventViewProps) =>
  render(<EventView {...props} />)

describe('event view component', () => {
  it('should render all elements', () => {
    const props: EventViewProps = {
      headquarters: [
        { id: 'piura', name: 'Piura' },
        { id: 'lima', name: 'Lima' },
      ],
      headquarter: '',
      eventType: '',
      eventName: '',
      eventDate: '',
      address: '',
      phoneNumber: '',
      isLoading: false,
      validation: { name: { error: false }, date: { error: false } },
      onChangeEventName: jest.fn(),
      onChangeEventDate: jest.fn(),
      onChangeAddress: jest.fn(),
      onChangePhoneNumber: jest.fn(),
    }
    renderComponent(props)

    const eventName = screen.getByText(/title/i)
    const eventDate = screen.getByText(/date/i)
    const address = screen.getByText(/address/i)
    const salesEventType = screen.getByRole('radio', { name: /sales/i })
    
    expect(eventName).toBeInTheDocument()
    expect(eventDate).toBeInTheDocument()
    expect(address).toBeInTheDocument()
    expect(salesEventType).toBeInTheDocument()
  })
})
