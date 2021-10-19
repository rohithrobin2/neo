import React from 'react'

import { useState } from "react";
import Splash from "./SplashScreen";
import { ThemeProvider } from "styled-components";
import { Paper } from '@material-ui/core';

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
  Paper:"white"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
  Paper:'blue'
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function Themes() {
    const [theme, setTheme] = useState("light")
    return (    
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />

    </ThemeProvider>
    )
}

export default Themes
