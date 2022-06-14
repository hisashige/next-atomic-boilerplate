import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { action } from "@storybook/addon-actions";
import { LoginArea } from "./";

export default {
  title: "Design System/Organisms/LoginArea",
  component: LoginArea,
  decorators: [
    (story: any) => <div style={{ padding: "0 2rem" }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof LoginArea>;

const Template: ComponentStory<typeof LoginArea> = (args) => (
  <LoginArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onLogin: action("Login succeed"),
};
Default.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};

export const Error = Template.bind({});
Error.args = {
  onLogin: action("Login Failed"),
  isError: true,
};
Error.parameters = {
  ...Default.parameters,
};

export const Disabled = Template.bind({});
Disabled.args = {
  onLogin: action("Login Failed"),
  isDisabled: true,
};
Disabled.parameters = {
  ...Default.parameters,
};
