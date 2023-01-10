import { render, screen, waitFor, fireEvent, within } from '@testing-library/react'

import YearFilter from './YearFilter'

const renderComponent = () => render(<YearFilter />)

const mockCurrentYear = 2023
jest.mock('../../tools', () => ({
  getCurrentYear: () => mockCurrentYear
}))

describe('year filter component', () => {
  it('should render all filter', () => {
    renderComponent()

    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()

    fireEvent.mouseDown(element)
    const listbox = within(screen.getByRole('listbox'))
    
    expect(screen.getAllByRole('option').length).toBe(3)
    expect(listbox.getByText(/2023/i)).toBeInTheDocument()
    expect(listbox.getByText(/2022/i)).toBeInTheDocument()
    expect(listbox.getByText(/2024/i)).toBeInTheDocument()
  })

  it('should render selected filter', () => {
    renderComponent()

    const element = screen.getByRole('button')
    fireEvent.mouseDown(element)
    const listbox = within(screen.getByRole('listbox'))
    fireEvent.click(listbox.getByText(/2022/i))
    
    waitFor(() => {
      expect(screen.getByRole('button')).toHaveTextContent(/2022/i)
    })
  })
})
