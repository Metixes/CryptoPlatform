import { useTranslation } from "react-i18next";
import SaleTimer from "./SaleTimer";

import buttonBuy from "../../../assets/icons/btn-buy.svg";
import styles from "./styles.module.scss";

export default function Card() {
  const { t } = useTranslation();

  return (
    <section className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_topChartsWrapper}>
          <span className={styles.card_topCharts}>{t('card.label')}</span>
        </div>
        <SaleTimer />
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_info_price}>
            <h3 className={styles.card_info_title}>{t('card.title')}</h3>
            <span className={styles.card_info_sum}>Eth 7.320983</span>
        </div>
        <a className={styles.card_info_btn} href=''>
          {t('buttons.BuyTicket')}
          <img src={buttonBuy} alt="bg" />
        </a>
      </div>
    </section>
  );
}
