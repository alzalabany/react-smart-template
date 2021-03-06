import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Footer, FooterProps } from './index';

const meta: Meta = {
  title: 'Footer',
  component: Footer,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FooterProps> = args => (
  <MemoryRouter>
    <Footer {...args} />
  </MemoryRouter>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  pages: [
    {
      name: 'hello',
      slug: '/hello/world',
    },
  ],
};
