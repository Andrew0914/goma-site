"use client";
import React, { useCallback, useEffect, useState } from "react";
import { SyntaxHighlighterProps, Prism } from "react-syntax-highlighter";

import styles from "./styles.module.scss";
import CodeThemeMenu, { codeThemes } from "./CodeThemeMenu";
import { useColorScheme } from "@mui/material";
import Image from "next/image";

interface CodeProps extends SyntaxHighlighterProps {
  className?: string;
}

export default function Code({ className, ...props }: CodeProps) {
  const [theme, setTheme] = useState<keyof typeof codeThemes>("a11yDark");
  const match = /language-(\w+)/.exec(className || "");
  const { mode: muiMode } = useColorScheme();

  enum CopieLabel {
    Copy = "Copy",
    Copied = "Copied!",
  }

  const [copyButtonDisabled, setCopyButtonDisabled] = useState(false);
  const [copyLabel, setCopyLabel] = useState(CopieLabel.Copy);

  useEffect(() => {
    const isDark =
      document.querySelector("body.dark") !== null || muiMode === "dark";
    const suitableTheme = isDark ? "a11yDark" : "oneLight";
    setTheme(suitableTheme);
  }, [setTheme, muiMode]);

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(props.children as string);

    setCopyLabel(CopieLabel.Copied);
    setCopyButtonDisabled(true);

    setTimeout(() => {
      setCopyLabel(CopieLabel.Copy);
      setCopyButtonDisabled(false);
    }, 2000);
  }, [props.children, setCopyLabel, setCopyButtonDisabled]);

  const onSetTheme = useCallback(
    (theme: keyof typeof codeThemes) => {
      setTheme(theme);
    },
    [setTheme]
  );

  return match ? (
    <div className={styles.codeBox}>
      <div className={styles.codeBox_codeFrame}>
        <header className={styles.codebox_topBar}>
          <div className={styles.codeBox_topBar_left}>
            <span className={styles.codeBox_topBar_circle}></span>
            <span className={styles.codeBox_topBar_circle}></span>
            <span className={styles.codeBox_topBar_circle}></span>
          </div>
          <CodeThemeMenu defaultTheme={theme} onSetTheme={onSetTheme} />
        </header>

        <Prism
          language={match[1]}
          PreTag="div"
          {...props}
          style={codeThemes[theme]}
          showLineNumbers={true}
          showInlineLineNumbers={true}
        />
        <button
          className={`${styles.codebox_copyButton} text--sm`}
          onClick={onCopy}
        >
          {copyLabel}
        </button>
        <Image
          className={styles.codebox_languageIcon}
          src={`/images/technologies/${match[1]}.svg`}
          alt={match[1]}
          title={match[1]}
          width={20}
          height={20}
        />
      </div>
    </div>
  ) : (
    <code className={`${className} text--content text--code`} {...props} />
  );
}
