import type { Meta, StoryFn } from "@storybook/react"
import CustomDialog, { CustomDialogProps, dialogOpenSubject$ } from "./CustomDialog"
import { Button } from "@mui/material";

const meta = {
    title: 'Components/CustomDialog',
    component: CustomDialog,
    tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
} satisfies Meta<typeof CustomDialog>;

export default meta;

const Template: StoryFn<CustomDialogProps> = (args) => (
    <>
      <Button variant="outlined" onClick={() => dialogOpenSubject$.setSubject = true}>
        Open Dialog
      </Button>
      <CustomDialog {...args} />
    </>
  );
  
  // Story for the default dialog with content
  export const DefaultDialog = Template.bind({});
  DefaultDialog.args = {
    children: (
      <div style={{ padding: '20px' }}>
        <h2>Favorite Properties</h2>
        <p>This dialog shows your favorite properties list.</p>
      </div>
    ),
  };