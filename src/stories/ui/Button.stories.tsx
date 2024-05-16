import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import {
  Button,
  ButtonSize,
  ButtonType,
  ButtonVariation,
} from '../../ui/Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    onClick: { action: 'clicked', description: 'Button click handler' },
    size: {
      options: Object.values(ButtonSize),
      description: 'Size of the button',
    },
    type: {
      options: Object.values(ButtonType),
      description: 'Type of the button',
    },
    variation: {
      options: Object.values(ButtonVariation),
      description: 'Variation of the button',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
    disabled: false,
    size: ButtonSize.Medium,
    type: ButtonType.Button,
    variation: ButtonVariation.Default,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    children: 'Small',
    size: ButtonSize.Small,
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    children: 'Large',
    size: ButtonSize.Large,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    children: 'Disabled',
    disabled: true,
  },
};
