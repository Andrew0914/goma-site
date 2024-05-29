'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import TheMobileNav from "./TheMobileNav"
import { useTranslations } from "next-intl";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import Link from "next/link";

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
              <li><Link href="/">{t("home")}</Link></li>
              <li><Link href="/work">{t("work")}</Link></li>
              <li><Link href="/blog">{t("blog")}</Link></li>
              <li><Link href="/about">{t("about")}</Link></li>
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
