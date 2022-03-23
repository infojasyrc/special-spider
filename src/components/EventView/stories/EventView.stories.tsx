import { Story, Meta } from '@storybook/react/types-6-0'

import EventView, { EventViewProps } from '../EventView'

export default {
  title: 'Container/EventView',
  component: EventView,
} as Meta

const Template: Story<EventViewProps> = (args) => <EventView {...args} />

export const Empty = Template.bind({})
Empty.args = {
  eventType: '',
  headquarters: [
    { id: '1', name: 'Piura' },
    { id: '2', name: 'Lima' },
  ],
  headquarter: '',
  isLoading: false,
}
