'use client';
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import TheMobileNav from "./TheMobileNav"
import { useTranslations } from "next-intl";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import Link from "next/link";
import { usePathname } from 'next/navigation'

interface Festivity {
  icon: string
  detail: string
}
interface Route {
  path: string,
  name: string

}

export default function TheNavbar() {
  const t = useTranslations('thenavbar');
  const navbarRef = useRef(null);
  const topRef = useRef(null);
  const [isAtTop, setAtTop] = useState(true);
  const pathname = usePathname();
  const routes: Route[] = [
    { path: '/', name: t("home") },
    { path: '/work', name: t("work") },
    { path: '/blog', name: t("blog") },
    { path: '/about', name: t("about") }

  ]
  const navbarClasses = classNames(styles.thenavbar, { [styles.thenavbar_top]: isAtTop });

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



  function getCurrentFestivity(): Festivity {
    const currentMontIndex = new Date().getMonth();
    const monthlyEmojis = ['👑', '💖', '🌼', '🐣', '🌷', '🌞', '🌴', '📚', '🌵', '🎃', '💀', '🎅🏼'];

    return {
      icon: monthlyEmojis[currentMontIndex],
      detail: t(`festivities.${currentMontIndex}`)
    }
  }


  return (
    <>
      <div ref={topRef} className={styles.top_reference} />
      <nav className={navbarClasses} ref={navbarRef}>
        <div className={`${styles.thenavbar_content} container`}>
          <h4 className="heading--4">
            <a href="/" title={getCurrentFestivity().detail}>{t('title', { emoji: getCurrentFestivity().icon })}</a>
          </h4>
          <div className={styles.thenavbar_navigation}>
            <ul className={`${styles.thenavbar_menu} text--content`}>
              {routes.map((route, index) => (
                <li key={index}>
                  <Link href={route.path} className={pathname === route.path ? styles.routeActive : ''}>
                    {route.name}
                  </Link>
                </li>
              ))}
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
