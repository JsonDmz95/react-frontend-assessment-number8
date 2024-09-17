import type { Meta, StoryObj } from "@storybook/react"
import Footer from "./Footer"
import { MemoryRouter } from "react-router-dom";

const meta = {
    title: 'Layout/Footer',
    component: Footer,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
    decorators: [
        (Story) => (
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        ),
      ],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
