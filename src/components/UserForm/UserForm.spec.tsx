import { render, screen } from '@testing-library/react'

import UserForm from './UserForm'

const renderComponent = () => render(<UserForm />)

describe('user form component', () => {
  it('should render all elements', () => {
    renderComponent()

    const name = screen.getByRole('textbox', { name: 'Name', exact: true })
    const lastName = screen.getByRole('textbox', {
      name: 'Last Name',
      exact: true,
    })
    const email = screen.getByRole('textbox', {
      name: 'Email',
      exact: true,
    })
    const isAdmin = screen.getByRole('checkbox', {
      name: 'Is Admin',
      exact: true,
    })
    const saveButton = screen.getByRole('button', { name: 'Save', exact: true })
    const cancelButton = screen.getByRole('button', {
      name: 'Cancel',
      exact: true,
    })

    expect(name).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(isAdmin).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
  })
})
