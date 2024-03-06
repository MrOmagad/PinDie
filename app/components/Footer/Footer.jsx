"use client";
import Styles from './Footer.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={Styles.footer}>
      {
        pathname === "" ? (
          <>
            <span className={Styles.footer__logo__name}>pindie</span>
            <span className={Styles.footer__logo__copy}>, XXI век</span>
          </>
        ) : (
          <>
            <Link href="/" className={Styles.footer__logo}>
              <span className={Styles.footer__logo__name}>pindie</span>
              <span className={Styles.footer__logo__copy}>, XXI век</span>
            </Link>
          </>
        )
      }
      <ul className={Styles.social__list}>
        <li className={Styles.social__list__item}>
          <Link href="" className={"button " + Styles.social__list__link}>YT</Link>
        </li>
        <li className={Styles.social__list__item}>
          <Link href="" className={"button " + Styles.social__list__link}>ВК</Link>
        </li>
        <li className={Styles.social__list__item}>
          <Link href="" className={"button " + Styles.social__list__link}>TG</Link>
        </li>
      </ul>
    </footer>
  )
}