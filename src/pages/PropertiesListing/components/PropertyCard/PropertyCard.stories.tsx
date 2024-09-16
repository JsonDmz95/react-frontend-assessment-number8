import type { Meta, StoryObj } from "@storybook/react"
import PropertyCard from "./PropertyCard"

const meta = {
    title: 'PropertyCard',
    component: PropertyCard,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof PropertyCard>;

export default meta;

type Story = StoryObj<typeof PropertyCard>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
