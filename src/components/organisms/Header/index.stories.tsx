import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { action } from "@storybook/addon-actions";
import { Header } from "./";

export default {
  title: "Design System/Organisms/Header",
  component: Header,
  decorators: [
    (story: any) => <div style={{ padding: "0 2rem" }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLogined: false,
  onLogout: action("logout"),
};
Default.parameters = {
  design: {
    type: "figma",
    url: "",
  },
};

export const Logined = Template.bind({});
Logined.args = {
  isLogined: true,
  onLogout: action("logout"),
};
