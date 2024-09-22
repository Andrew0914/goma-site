import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useColorScheme } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

interface ThemeSelectorProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function ThemeSelector(props: ThemeSelectorProps) {
  const [isLightMode, seIsLightMode] = useState(false);
  const { setMode } = useColorScheme();
  const t = useTranslations("themeSelector");

  useEffect(() => {
    const currenTheme = document.querySelector("body")!.className;
    seIsLightMode(currenTheme === "light");
    setMode(currenTheme === "light" ? "light" : "dark");
  }, []);

  function changeTheme() {
    document.querySelector("body")!.className = isLightMode ? "dark" : "light";
    seIsLightMode(!isLightMode);
    setMode(isLightMode ? "dark" : "light");
  }

  return (
    <IconButton
      color="info"
      onClick={changeTheme}
      className={props.className}
      aria-label={t("title")}
      aria-description={t("description")}
    >
      {isLightMode ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}
