import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#334a50",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#006876",
      light: "#51d7ef",
      dark: "#004e59",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4a6268",
      light: "#cde7ed",
      dark: "#334a50",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ba1a1a",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#795900",
      contrastText: "#ffffff",
    },
    info: {
      main: "#006688",
      contrastText: "#ffffff",
    },
    success: {
      main: "#006d43",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bfc8ca",
      disabled: "rgba(25, 28, 29, 0.38)",
    },
  },
  shape: {
    borderRadius: 24,
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#f8fafa",
      paper: "#cde7ed",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#006876",
      light: "#51d7ef",
      dark: "#004e59",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4a6268",
      light: "#cde7ed",
      dark: "#334a50",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ba1a1a",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#795900",
      contrastText: "#ffffff",
    },
    info: {
      main: "#006688",
      contrastText: "#ffffff",
    },
    success: {
      main: "#006d43",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#191c1d",
      secondary: "#6f797b",
      disabled: "rgba(25, 28, 29, 0.38)",
    },
  },
  shape: {
    borderRadius: 24,
  },
};
