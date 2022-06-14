import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { action } from "@storybook/addon-actions";
import { LoginTemplate } from "./";

export default {
  title: "Design System/Templates/LoginTemplate",
  component: LoginTemplate,
  decorators: [
    (story: any) => <div style={{ padding: "0 2rem" }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof LoginTemplate>;

const Template: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onLogin: action("login"),
};
Default.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};

export const Error = Template.bind({});
Error.args = {
  isErrorLogin: true,
  onLogin: action("login"),
};
Error.parameters = {
  ...Default.parameters,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabledLoginButton: true,
  onLogin: action("login"),
};
Disabled.parameters = {
  ...Default.parameters,
};
