import { extendTheme } from "@chakra-ui/react";

// example theme
const theme = extendTheme({
  colors: {
    primary: "#198754",
    accent: "#FF7100",
    secondary: "#2B4100",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
});

export default theme;
