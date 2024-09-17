import type { Meta, StoryFn, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
    argTypes: {
        variant: {
          control: { type: 'select', options: ['primary', 'secondary', 'full-width'] },
        },
        onClick: { action: 'clicked' },
      },
} satisfies Meta<typeof Button>;

export default meta;

// Define a template for rendering the Button stories
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Story for the primary variant of the button
export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary Button',
  children: 'Primary',
  variant: 'primary',
};

// Story for the secondary variant of the button
export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Secondary Button',
  children: 'Secondary',
  variant: 'secondary',
};

// Story for the full-width variant of the button
export const FullWidth = Template.bind({});
FullWidth.args = {
  title: 'Full Width Button',
  children: 'Full Width',
  variant: 'full-width',
};

// Additional story with custom text for demonstration
export const CustomButton = Template.bind({});
CustomButton.args = {
  title: 'Custom Button',
  children: 'Click Me',
  variant: 'primary',
};