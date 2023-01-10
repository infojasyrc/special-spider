import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'

import SortFilter from './SortFilter'

const renderComponent = () => render(<SortFilter/>)

describe('sort filter', () => {
  it('should render all filters', () => {
    renderComponent()

    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()

    fireEvent.mouseDown(element)
    const listbox = within(screen.getByRole('listbox'))
    
    expect(screen.getAllByRole('option').length).toBe(2)
    expect(listbox.getByText(/ascending/i)).toBeInTheDocument()
    expect(listbox.getByText(/descending/i)).toBeInTheDocument()
  })

  it('should render selected filter', () => {
    renderComponent()

    const element = screen.getByRole('button')
    fireEvent.mouseDown(element)
    const listbox = within(screen.getByRole('listbox'))
    fireEvent.click(listbox.getByText(/ascending/i))
    
    waitFor(() => {
      expect(screen.getByRole('button')).toHaveTextContent(/ascending/i)
    })
  })
})
