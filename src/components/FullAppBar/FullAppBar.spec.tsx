import { render, screen } from '@testing-library/react'

import FullAppBar, { FullAppBarProps } from './FullAppBar'

const renderComponent = (props: FullAppBarProps) =>
  render(<FullAppBar {...props} />)

describe('fullappbar component', () => {
  it('should render all elements', () => {
    const props: FullAppBarProps = {
      title: 'Super title',
      version: '1.2',
      onLogout: jest.fn(),
    }
    renderComponent(props)
    const title = screen.getByText(/super title/i)
    expect(title).toBeInTheDocument()

    const version = screen.getByText(/v1.2/i)
    expect(version).toBeInTheDocument()
  })
})
