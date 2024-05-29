import { IconButton } from "@mui/material"
import React, { useEffect, useState } from "react";

interface ThemeSelectorProps extends React.HTMLAttributes<HTMLButtonElement> { }

export default function ThemeSelector(props: ThemeSelectorProps) {
  const [isLightMode, seIsLightMode] = useState(false);

  useEffect(() => {
    seIsLightMode(document.querySelector("body")!.className === "light");
  }, []);


  function changeTheme() {
    document.querySelector("body")!.className = isLightMode ? "dark" : "light";
    seIsLightMode(!isLightMode);
  }

  return (
    <IconButton color="info" onClick={changeTheme} className={props.className}>
      {isLightMode ? "🌞" : "🌚"}
    </IconButton >
  )
}
