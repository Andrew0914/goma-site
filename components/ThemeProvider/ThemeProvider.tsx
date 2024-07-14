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
        primary: { main: "#d62ad0", contrastText: "#fff" },
        secondary: { main: "#fb7afc", contrastText: "#000" },
        info: { main: "#fbb4f5", contrastText: "#000" },
        warning: { main: "#fff455", contrastText: "#000" },
        error: { main: "#ef4444", contrastText: "#fff" },
        success: { main: "#67ff64", contrastText: "#000" },
      },
    },
    light: {
      palette: {
        primary: {
          main: "#0369a1",
          contrastText: "#fff",
        },
        secondary: { main: "#155e75", contrastText: "#fff" },
        info: { main: "#487df0", contrastText: "#fff" },
        warning: {
          main: "#ffc700",
          contrastText: "#000",
        },
        error: { main: "#dc2626", contrastText: "#fff" },
        success: { main: "#059212", contrastText: "#fff" },
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
        containedInfo: {
          ":hover": {
            color: "var(--white)",
          },
        },
        containedPrimary: {
          ":hover": {
            color: "var(--white)",
          },
        },
        containedSecondary: {
          ":hover": {
            color: "var(--text)",
          },
        },
        containedSuccess: {
          ":hover": {
            color: "var(--white)",
          },
        },
        containedError: {
          ":hover": {
            color: "var(--white)",
          },
        },
        containedWarning: {
          ":hover": {
            color: "var(--white)",
          },
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
