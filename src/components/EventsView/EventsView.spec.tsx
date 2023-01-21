import { render, screen } from '@testing-library/react'
import { Conference, Headquarter } from '../../shared/entities'

import EventsView, { EventsViewProps } from './EventsView'

const renderComponent = (props: EventsViewProps) =>
  render(<EventsView {...props} />)

const mockEvent01: Conference = {
  id: '0001',
  eventDate: '2023-01-19',
  name: 'Event 01',
  status: 'created',
  year: 2023,
}

const mockEvent02: Conference = {
  id: '0002',
  eventDate: '2023-04-19',
  name: 'Event 02',
  status: 'created',
  year: 2023,
}

const mockEvent03: Conference = {
  id: '0003',
  eventDate: '2023-08-19',
  name: 'Event 03',
  status: 'created',
  year: 2023,
}

describe('events view component', () => {
  describe('with loaded data', () => {
    it('should render all elements without data', () => {
      const mockEvents: Conference[] = []
      const mockHeadquarters: Headquarter[] = []
      const props: EventsViewProps = {
        events: mockEvents,
        allHeadquarters: mockHeadquarters,
        loadingEvents: false,
        loadingHeadquarters: false,
        isAdmin: false,
        onSelectedEvent: jest.fn(),
        changeHeadquarter: jest.fn(),
      }
      renderComponent(props)
      const eventsTitle = screen.getByText(/events/i)
      const headquarterTitle = screen.getByLabelText(/headquarter/i)

      expect(eventsTitle).toBeInTheDocument()
      expect(headquarterTitle).toBeInTheDocument()
    })

    it('should render with 3 events', () => {
      const mockEvents: Conference[] = [mockEvent01, mockEvent02, mockEvent03]
      const mockHeadquarters: Headquarter[] = []
      const props: EventsViewProps = {
        events: mockEvents,
        allHeadquarters: mockHeadquarters,
        loadingEvents: false,
        loadingHeadquarters: false,
        isAdmin: false,
        onSelectedEvent: jest.fn(),
        changeHeadquarter: jest.fn(),
      }
      renderComponent(props)
      const eventsTitle = screen.getByText(/events/i)
      const headquarterTitle = screen.getByLabelText(/headquarter/i)

      const eventElement01 = screen.getByText(/event 01/i)
      const eventElement02 = screen.getByText(/event 02/i)
      const eventElement03 = screen.getByText(/event 03/i)

      expect(eventsTitle).toBeInTheDocument()
      expect(headquarterTitle).toBeInTheDocument()

      expect(eventElement01).toBeInTheDocument()
      expect(eventElement02).toBeInTheDocument()
      expect(eventElement03).toBeInTheDocument()
    })

    it('should render with 3 events filtered events', () => {
      const mockEvents: Conference[] = [mockEvent01, mockEvent02, mockEvent03]
      const mockHeadquarters: Headquarter[] = []
      const props: EventsViewProps = {
        events: mockEvents,
        allHeadquarters: mockHeadquarters,
        loadingEvents: false,
        loadingHeadquarters: false,
        isAdmin: false,
        onSelectedEvent: jest.fn(),
        changeHeadquarter: jest.fn(),
      }
      renderComponent(props)
      const eventsTitle = screen.getByText(/events/i)
      const headquarterTitle = screen.getByLabelText(/headquarter/i)

      const eventElement01 = screen.getByText(/event 01/i)
      const eventElement02 = screen.getByText(/event 02/i)
      const eventElement03 = screen.getByText(/event 03/i)

      expect(eventsTitle).toBeInTheDocument()
      expect(headquarterTitle).toBeInTheDocument()

      expect(eventElement01).toBeInTheDocument()
      expect(eventElement02).toBeInTheDocument()
      expect(eventElement03).toBeInTheDocument()
    })
  })
})
