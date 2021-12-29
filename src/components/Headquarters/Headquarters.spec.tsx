import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from '@testing-library/react'

import Headquarters, { HeadquartersProps } from './Headquarters'

const renderComponent = (props: HeadquartersProps) =>
  render(<Headquarters {...props} />)

describe('headquarters component', () => {
  it('should render loading message', () => {
    const props: HeadquartersProps = {
      allHeadquarters: [],
      loading: true,
      onChangeHeadquarter: jest.fn(),
    }
    renderComponent(props)
    expect(screen.getByText(/loading hqs/i)).toBeInTheDocument()
  })

  it('should render empty', () => {
    const props: HeadquartersProps = {
      allHeadquarters: [],
      loading: false,
      onChangeHeadquarter: jest.fn(),
    }
    renderComponent(props)
    const element = screen.getByRole('button')
    expect(element).toHaveTextContent(/choose a headquarter/i)
  })

  it('should render with elements changing headquarter', () => {
    const mockOnChange = jest.fn()
    const props: HeadquartersProps = {
      loading: false,
      allHeadquarters: [
        { id: '01', name: 'Lima' },
        { id: '02', name: 'Buenos Aires' },
      ],
      onChangeHeadquarter: mockOnChange
    }
    renderComponent(props)
    const element = screen.getByRole('button')
    fireEvent.mouseDown(element)
    const listbox = within(screen.getByRole('listbox'))
    fireEvent.click(listbox.getByText(/lima/i))
    waitFor(() => {
      expect(screen.getByRole('button')).toHaveTextContent(/lima/i)
      expect(mockOnChange).toHaveBeenCalled()
      expect(mockOnChange).toHaveBeenCalledTimes(1)
    })
  })

  it('should render with elements with selected headquarter', () => {
    const props: HeadquartersProps = {
      allHeadquarters: [
        { id: '01', name: 'Lima' },
        { id: '02', name: 'Buenos Aires' },
      ],
      selectedHeadquarter: '02',
      loading: false,
      onChangeHeadquarter: jest.fn(),
    }
    renderComponent(props)
    const element = screen.getByRole('button')
    expect(element).toHaveTextContent(/buenos aires/i)
  })
})
