'use client'

import { workSans } from "@/app/fonts";
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme } from "@mui/material";


const extendedMuiTheme = extendTheme({
  typography: {
    fontFamily: workSans.style.fontFamily,
  },
  colorSchemes: {
    dark: {
      palette: { primary: { main: '#459ff6', contrastText: '#fff' } },
    },
    light: {
      palette: { primary: { main: '#194db5', contrastText: '#fff' } }
    }
  }
})

export default function MyThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <CssVarsProvider theme={extendedMuiTheme}>
      {children}
    </CssVarsProvider>
  )
}
