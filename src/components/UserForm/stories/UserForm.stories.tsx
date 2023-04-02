import { Story, Meta } from '@storybook/react/types-6-0'

import UserForm from '../UserForm'

export default {
  title: 'Container/UserForm',
  component: UserForm,
} as Meta

const Template: Story = (args) => <UserForm {...args} />

export const Basic = Template.bind({})
Basic.args = {}
