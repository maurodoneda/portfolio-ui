import { colors, createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import React from "react";
import { ColorModeProvider } from "./context/ColorModeContext";
import { HomePage } from "./features/home/HomePage";
import { TopBar } from "./features/topbar/TopBar";

const theme = createTheme({
    palette: {
        primary: {
          main: colors.indigo[500],
        },
        secondary: {
          main: colors.indigo[100],
        },
      },
  });

export const App = () => (
    <ColorModeProvider>
        <ThemeProvider theme={theme}>
            <TopBar />
            <HomePage />
        </ThemeProvider>
    </ColorModeProvider>
)