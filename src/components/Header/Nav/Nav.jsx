import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export default function Nav({ active }) {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className={active ? styles.nav : styles.nav_navActive}>
        <li>
          <a className={styles.nav_link}>
            <span className={styles.nav_text}>{t("header.Home")}</span>
          </a>
        </li>
        <li>
          <a className={styles.nav_link}>
            <span className={styles.nav_text}>{t("header.Game")}</span>
          </a>
        </li>
        <li>
          <a className={styles.nav_link}>
            <span className={styles.nav_text}>{t("header.Lottery")}</span>
          </a>
        </li>
        <li>
          <a className={styles.nav_link}>
            <span className={styles.nav_text}>{t("header.Pages")}</span>
          </a>
        </li>
        <li>
          <a className={styles.nav_link}>
            <span className={styles.nav_text}>{t("header.Blog")}</span>
          </a>
        </li>
        <li>
          <a className={styles.nav_link}>
            <span className={styles.nav_text}>{t("header.Contact")}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
