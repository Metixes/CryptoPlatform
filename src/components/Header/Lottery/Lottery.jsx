import { useTranslation } from "react-i18next";
import MetaMask from '../../../util/metamask/MetaMask'

import lotteryLogo from "../../../assets/icons/lotteryLogo.svg";
import styles from "./styles.module.scss";

export default function Lottery() {
  const { t } = useTranslation();

  return (
    <div className={styles.lottery}>
      <img
        className={styles.lottery_logo}
        src={lotteryLogo}
        alt="Lottery Jackpot"
      />
      <h1 className={styles.lottery_title}>Exclusive lottery</h1>
      <p className={styles.lottery_jackpot}>$100,000K</p>
      <div className={styles.lottery_btns}>
        <MetaMask styles={styles.lottery_btns_btnConnect} />
        <a className={styles.lottery_btns_btnWatch} href="">
          {t("buttons.WatchVideo")}
        </a>
      </div>
    </div>
  );
}
