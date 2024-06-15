"use client";

import { workSans } from "@/app/fonts";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material";

const extendedMuiTheme = extendTheme({
  typography: {
    fontFamily: workSans.style.fontFamily,
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: "#8b5cf6", contrastText: "#fff" },
        secondary: { main: "#737db0", contrastText: "#fff" },
        info: { main: "#d8b4fe", contrastText: "#000" },
        warning: { main: "#fde047", contrastText: "#000" },
        error: { main: "#ef4444", contrastText: "#fff" },
      },
    },
    light: {
      palette: {
        primary: { main: "#0369a1", contrastText: "#fff" },
        secondary: { main: "#155e75", contrastText: "#fff" },
        info: { main: "#2563eb", contrastText: "#fff" },
        warning: { main: "#facc15", contrastText: "#000" },
        error: { main: "#dc2626", contrastText: "#fff" },
      },
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "var(--contrast)",
          color: "var(--text)",
          boxShadow: "2px 3px 7px 3px var(--drop-shadow)",
        },
        arrow: {
          color: "var(--contrast)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "2px 3px 7px 1px var(--drop-shadow)",
        },
      },
    },
  },
});

export default function MyThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CssVarsProvider theme={extendedMuiTheme}>{children}</CssVarsProvider>;
}
