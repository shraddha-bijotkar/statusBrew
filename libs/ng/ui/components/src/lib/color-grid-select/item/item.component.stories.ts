import type { Meta, StoryObj } from '@storybook/angular';
import {
  COLOR_GRID_ITEMS,
  COLOR_GRID_ITEM_SIZES,
  ColorGridItemComponent,
} from './item.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ColorGridItemComponent> = {
  component: ColorGridItemComponent,
  title: 'ItemComponent',
};
export default meta;
type Story = StoryObj<ColorGridItemComponent>;

export const Primary: Story = {
  args: {
    value: COLOR_GRID_ITEMS[0],
    size: COLOR_GRID_ITEM_SIZES[0],
    checked: false,
  },
  argTypes: {
    value: {
      control: 'select',
      options: COLOR_GRID_ITEMS,
    },
    size: {
      control: 'radio',
      options: COLOR_GRID_ITEM_SIZES,
    },
  },
};
