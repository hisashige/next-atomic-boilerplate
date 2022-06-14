import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Input } from ".";

export default {
  title: "Design System/Molecules/Input",
  component: Input,
  decorators: [
    (story: any) => <div style={{ padding: "0 2rem" }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  inputType: "email",
};
Email.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};

export const Password = Template.bind({});
Password.args = {
  inputType: "password",
};
Password.parameters = {
  ...Email.parameters,
};
