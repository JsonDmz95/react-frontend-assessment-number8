import type { Meta, StoryObj } from "@storybook/react"
import PropertyDetails from "./PropertyDetails"

const meta = {
    title: 'PropertyDetails',
    component: PropertyDetails,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof PropertyDetails>;

export default meta;

type Story = StoryObj<typeof PropertyDetails>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
