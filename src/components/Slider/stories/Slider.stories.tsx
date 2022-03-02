import { Story, Meta } from '@storybook/react/types-6-0'

import Slider, { SliderProps } from '../Slider'

export default {
  title: 'Container/Slider',
  component: Slider,
} as Meta

const Template: Story<SliderProps> = (args) => <Slider {...args} />

export const Empty = Template.bind({})
Empty.args = {
  images: [],
  onFormClicked: () => {},
  startPaused: false
}
