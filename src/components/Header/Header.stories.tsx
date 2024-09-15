import type { Meta, StoryObj } from "@storybook/react"
import Header from "./Header"

const meta = {
    title: 'Header',
    component: Header,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
