import { useTranslation } from "react-i18next";
import Card from "./Card";

import buttonPast from "../../../assets/icons/btn-watch.svg";
import sprite from "../../../assets/icons/sprite.svg";
import styles from "./styles.module.scss";

export default function Explore() {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.explore}>
          <div className={styles.explore_info}>
            <h2 className={styles.explore_title}>{t("explore.title")}</h2>
            <a className={styles.explore_btn} href="">
              {t("buttons.Past")}
              <svg>
                <use href={sprite + '#arrow'}/>
              </svg>
              <img src={buttonPast} alt="bg" />
            </a>
          </div>
          <div className={styles.explore_cards}>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
