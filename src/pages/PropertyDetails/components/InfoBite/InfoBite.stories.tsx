import type { Meta, StoryObj } from "@storybook/react"
import InfoBite from "./InfoBite"

const meta = {
    title: 'InfoBite',
    component: InfoBite,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof InfoBite>;

export default meta;

type Story = StoryObj<typeof InfoBite>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
