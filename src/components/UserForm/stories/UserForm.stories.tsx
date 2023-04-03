import { Story, Meta } from '@storybook/react/types-6-0'

import { UserRole } from '../../../shared/entities'
import UserForm, { UserFormProps } from '../UserForm'

export default {
  title: 'Container/UserForm',
  component: UserForm,
} as Meta

const Template: Story<UserFormProps> = (args) => <UserForm {...args} />

export const Basic = Template.bind({})
const roles: UserRole[] = [
  {
    id: '01',
    name: 'Role A',
  },
  {
    id: '02',
    name: 'Role B',
  },
]
Basic.args = {
  availableRoles: roles,
}
