'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import TheMobileNav from "./TheMobileNav"
import { useTranslations } from "next-intl";
import { IconButton } from "@mui/material";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

function getCurrentEmoji() {
  const currentMontIndex = new Date().getMonth();
  const monthlyEmojis = ['👑', '💖', '🌼', '🐣', '🌷', '🌞', '🌴', '📚', '🌵', '🎃', '💀', '🎅🏼'];

  return monthlyEmojis[currentMontIndex];
}

export default function TheNavbar() {
  const t = useTranslations('thenavbar');
  const navbarRef = useRef(null);
  const topRef = useRef(null);
  const [isAtTop, setAtTop] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtTop(!entry.isIntersecting);
      },
      { threshold: [0] }
    );

    if (topRef.current)
      observer.observe(topRef.current);

    return () => {
      if (topRef.current)
        observer.unobserve(topRef.current);

    };
  }, []);

  const navbarContentClasses = classNames(styles.thenavbar_content, { [styles.thenavbar_top]: isAtTop });

  return (
    <>
      <div ref={topRef} className={styles.top_reference} />
      <nav className={styles.thenavbar} ref={navbarRef}>
        <div className={navbarContentClasses}>
          <h4 className="heading--4">
            <a href="/">{t('title', { emoji: getCurrentEmoji() })}</a>
          </h4>
          <div className={styles.thenavbar_navigation}>
            <ul className={`${styles.thenavbar_menu} text--content`}>
              <li><a href="/">{t("home")}</a></li>
              <li><a href="/about">{t("projects")}</a></li>
              <li><a href="/contact">{t("blog")}</a></li>
              <li><a href="/about">{t("about")}</a></li>
            </ul>
            <div className={styles.thenavbar_extras}>
              <ThemeSelector />
              <TheMobileNav />
            </div>
          </div>

        </div>

      </nav >
    </>

  )
}
