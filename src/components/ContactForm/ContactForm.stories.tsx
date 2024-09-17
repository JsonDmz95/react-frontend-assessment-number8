import type { Meta, StoryObj } from "@storybook/react"
import ContactForm from "./ContactForm"

const meta = {
    title: 'ContactForm',
    component: ContactForm,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof ContactForm>;

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
