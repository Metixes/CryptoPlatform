import { useTranslation } from "react-i18next";
import PictureMediaQuery from "../PictureMediaQuery";

import logo from '../../assets/icons/logo.svg';
import ImgDefault from "../../assets/images/footer/bg/1.png";
import Img1x from "../../assets/images/footer/bg/1.webp";
import Img075x from "../../assets/images/footer/bg/075.webp";
import Img05x from "../../assets/images/footer/bg/05.webp";
import sprite from "../../assets/icons/sprite.svg";

import styles from "./styles.module.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <PictureMediaQuery
        ImgDefault={ImgDefault}
        Img1x={Img1x}
        Img075x={Img075x}
        Img05x={Img05x}
        className={styles.container_bg}
        width05={"(max-width: 786px)"}
        width075={"(max-width: 1300px)"}
        width1={"(max-width: 1400px)"}
      />
      <footer className={styles.wrapper}>
        <div className={styles.footer}>
        <img className={styles.footer_logo} src={logo} alt="logo" />
          <nav className={styles.footer_nav}>
            <a className={styles.footer_nav_link}>{t("footer.AboutUs")}</a>
            <a className={styles.footer_nav_link}>{t("footer.Contact")}</a>
            <a className={styles.footer_nav_link}>{t("footer.PrivacyPolicy")}</a>
            <a className={styles.footer_nav_link}>
              {t("footer.TermsOfServices")}
            </a>
          </nav>
        </div>
        <div className={styles.footer_info}>
          <div className={styles.footer_copy}>{t("footer.copy")}</div>
          <div className={styles.footer_socialIcons}>
            <a className={styles.footer_socialIcon} href="">
              <svg>
                <use href={sprite + "#twitter"}></use>
              </svg>
            </a>
            <a className={styles.footer_socialIcon} href="">
              <svg>
                <use href={sprite + "#instagram"}></use>
              </svg>
            </a>
            <a className={styles.footer_socialIcon} href="">
              <svg>
                <use href={sprite + "#linkedin"}></use>
              </svg>
            </a>
            <a className={styles.footer_socialIcon} href="">
              <svg>
                <use href={sprite + "#facebook"}></use>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
