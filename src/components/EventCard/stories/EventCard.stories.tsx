import { Story, Meta } from '@storybook/react/types-6-0'

import { Conference } from '../../../shared/entities'
import EventCard, { EventCardProps } from '../EventCard'

export default {
  title: 'Container/EventCard',
  component: EventCard,
} as Meta

const Template: Story<EventCardProps> = (args) => <EventCard {...args} />

const eventCreated: Conference = {
  id: '',
  name: 'Google IO 2021',
  status: 'created',
  eventDate: '2021-03-15T17:00:00.000',
}
export const Created = Template.bind({})
Created.args = {
  event: eventCreated,
}

const eventOpened: Conference = {
  id: '',
  name: 'Google IO 2021',
  status: 'opened',
  eventDate: '2021-04-15T17:00:00.000',
  // photo: '/images/NoImage.png',
}
export const Opened = Template.bind({})
Opened.args = {
  event: eventOpened,
}

const eventPaused: Conference = {
  id: '',
  name: 'Google IO 2021',
  status: 'paused',
  eventDate: '2021-05-15T17:00:00.000',
  // photo: '/images/NoImage.png',
}
export const Paused = Template.bind({})
Paused.args = {
  event: eventPaused,
}

const eventClosed: Conference = {
  id: '',
  name: 'Google IO 2021',
  status: 'closed',
  eventDate: '2021-06-15T17:00:00.000',
  // photo: '/images/NoImage.png',
}
export const Closed = Template.bind({})
Closed.args = {
  event: eventClosed,
}
