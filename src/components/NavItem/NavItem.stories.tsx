import { Meta, StoryObj } from "@storybook/react";
import NavItem from "./NavItem";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Components/NavItem",
  component: NavItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    href: { control: "text" },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllProperties: Story = {
    args: {
      label: 'All Properties',
      href: '/all-properties',
    },
  };