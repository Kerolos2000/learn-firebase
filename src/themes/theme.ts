import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  palette: {
    background: {
      default: "#121212",
      paper: "#1D1D1D",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    mode: "dark",
    primary: {
      contrastText: "#ffffff",
      dark: "#bb86fc",
      light: "#6200ea",
      main: "#3700b3",
    },
    secondary: {
      contrastText: "#ffffff",
      dark: "#03dac6",
      light: "#018786",
      main: "#018786",
    },
  },
  shape: {
    borderRadius: 24,
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    mode: "light",
    primary: {
      contrastText: "#000000",
      dark: "#6200ea",
      light: "#b39ddb",
      main: "#bb86fc",
    },
    secondary: {
      contrastText: "#000000",
      dark: "#018786",
      light: "#03dac6",
      main: "#03dac6",
    },
  },
  shape: {
    borderRadius: 24,
  },
};
