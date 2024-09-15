import type { Meta, StoryObj } from "@storybook/react"
import PropertiesListing from "./PropertiesListing"

const meta = {
    title: 'PropertiesListing',
    component: PropertiesListing,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof PropertiesListing>;

export default meta;

type Story = StoryObj<typeof PropertiesListing>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
