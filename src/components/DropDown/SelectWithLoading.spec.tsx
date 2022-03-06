import { render, screen } from '@testing-library/react'

import SelecWithLoading, { SelectWithLoadingProps } from './SelectWithLoading'

const renderComponent = (props: SelectWithLoadingProps) =>
  render(<SelecWithLoading {...props} />)

describe('select with loading component', () => {
  it('should render all elements', () => {
    const options: JSX.Element = <option></option>
    const props: SelectWithLoadingProps = {
      attributeName: 'dropdown-with-loader',
      attributeLabel: 'Dropdown With Loader',
      attributeValue: '',
      attributeRequired: true,
      attributeOptions: options,
      error: false,
      errorMessage: '',
      onChange: jest.fn(),
      onBlur: jest.fn(),
    }
    renderComponent(props)
    const selectWithLoader = screen.getByTestId('select-with-loader')
    expect(selectWithLoader).toBeInTheDocument()
  })
})
