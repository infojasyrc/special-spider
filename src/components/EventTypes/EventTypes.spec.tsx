import { render, screen } from '@testing-library/react'

import EventTypes, {EventTypesProps} from './EventTypes'

const renderComponent = (props: EventTypesProps) => render(<EventTypes {...props} />)

describe('event types component', () => {
  it('should render all elements', () => {
    const props: EventTypesProps = {
      selectedEventType: '',
      onUpdateEventType: jest.fn(),
    }
    renderComponent(props)
    const recruitingButton = screen.getByText(/recruiting/i)
    expect(recruitingButton).toBeInTheDocument()
    const salesButton = screen.getByText(/sales/i)
    expect(salesButton).toBeInTheDocument()
  })

  it('should show a selected option', () => {
    const props: EventTypesProps = {
      selectedEventType: 'sales',
      onUpdateEventType: jest.fn(),
    }
    renderComponent(props)

    const salesButton = screen.getByRole('radio', {name: /sales/i})
    expect(salesButton).toBeInTheDocument()
    expect(salesButton).toBeChecked()
  })
})
