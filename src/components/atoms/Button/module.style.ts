import styled from "styled-components";
import { Button } from "@chakra-ui/react";

import { ButtonSize } from "./type";

export const AppButton = styled(Button)<{
  buttonsize: ButtonSize;
}>`
  width: ${({ buttonsize }) => (buttonsize === "small" ? "auto" : "450px")};
  height: ${({ buttonsize }) => (buttonsize === "small" ? "40px" : "48px")};
`;
