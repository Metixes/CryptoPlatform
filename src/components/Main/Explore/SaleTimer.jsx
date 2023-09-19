import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import dayjs from "dayjs";
import styles from "./styles.module.scss";

export default function SaleTimer() {
  const { t } = useTranslation();
  const [saleDays, setSaleDays] = useState(0);
  const [saleHours, setSaleHours] = useState(0);
  const [saleMinutes, setSaleMinutes] = useState(0);
  const [saleSeconds, setSaleSeconds] = useState(0);

  const saleTimer = () => {
    const counterDownDate = dayjs().add(6, 'day').valueOf();

    setInterval(() => {
      const currentDate = dayjs(Date()).valueOf();
      const distance = counterDownDate - currentDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval();
      } else {
        setSaleDays(days);
        setSaleHours(hours);
        setSaleMinutes(minutes);
        setSaleSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    saleTimer();
  }, []);

  return (
    <div className={styles.card_counter}>
      <div className={styles.card_counter_item}>
        {saleDays}
        <span className={styles.card_counter_nums}>{t("card.Days")}</span>
      </div>
      <div className={styles.card_counter_item}>
        {saleHours}
        <span className={styles.card_counter_nums}>{t("card.Hours")}</span>
      </div>
      <div className={styles.card_counter_item}>
        {saleMinutes}
        <span className={styles.card_counter_nums}>{t("card.Mins")}</span>
      </div>
      <div className={styles.card_counter_item}>
        {saleSeconds}
        <span className={styles.card_counter_nums}>{t("card.Secs")}</span>
      </div>
    </div>
  );
}
