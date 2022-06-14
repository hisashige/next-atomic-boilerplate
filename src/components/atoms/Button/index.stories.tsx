import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { action } from "@storybook/addon-actions";
import { Button } from "./";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  decorators: [
    (story: any) => <div style={{ padding: "0 2rem" }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "ログイン",
  onClick: action("clicked"),
};
Primary.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "ログイン",
  onClick: action("clicked"),
};
Secondary.parameters = {
  ...Primary.parameters,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "primary",
  label: "ログイン",
  onClick: action("clicked"),
  isDisabled: true,
};
Disabled.parameters = {
  ...Primary.parameters,
};

export const Accent = Template.bind({});
Accent.args = {
  type: "accent",
  label: "ログイン",
  onClick: action("clicked"),
};
Accent.parameters = {
  ...Primary.parameters,
};

export const Small = Template.bind({});
Small.args = {
  type: "primary",
  size: "small",
  label: "ログイン",
  onClick: action("clicked"),
};
Small.parameters = {
  ...Primary.parameters,
};

export const Logout = Template.bind({});
Logout.args = {
  type: "logout",
  size: "small",
  label: "ログアウト",
  onClick: action("clicked"),
};
Logout.parameters = {
  ...Primary.parameters,
};
