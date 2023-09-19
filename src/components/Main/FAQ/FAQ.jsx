import { useTranslation } from "react-i18next";
import { Collapse } from "antd";

import btnShowMore from "../../../assets/icons/btn-watch.svg"
import sprite from "../../../assets/icons/sprite.svg";
import styles from "./styles.module.scss";

export default function FAQ() {
  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      label: (
        <>
          <svg>
            <use href={sprite + "#circle-dots"} />
          </svg>
          {t("FAQs.faq1")}
        </>
      ),
      children: <p>{t("FAQs.faq-desc-1")}</p>,
    },
    {
      key: "2",
      label: (
        <>
          <svg>
            <use href={sprite + "#circle-dots"} />
          </svg>
          {t("FAQs.faq2")}
        </>
      ),
      children: <p>{t("FAQs.faq-desc-2")}</p>,
    },
    {
      key: "3",
      label: (
        <>
          <svg>
            <use href={sprite + "#circle-dots"} />
          </svg>
          {t("FAQs.faq3")}
        </>
      ),
      children: <p>{t("FAQs.faq-desc-3")}</p>,
    },
    {
      key: "4",
      label: (
        <>
          <svg>
            <use href={sprite + "#circle-dots"} />
          </svg>
          {t("FAQs.faq4")}
        </>
      ),
      children: <p>{t("FAQs.faq-desc-4")}</p>,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.faqs}>
          <h2 className={styles.faqs_title}>{t("FAQs.title")}</h2>
          <Collapse
            className={styles.faqs_collapse}
            items={items}
            expandIconPosition={"end"}
          />
          <a className={styles.faqs_btn} href="">
            {t("buttons.ShowMore")}
            <svg>
              <use href={sprite + '#arrow-down'} />
            </svg>
            <img src={btnShowMore} alt="bg" />
          </a>
        </div>
      </div>
    </section>
  );
}
