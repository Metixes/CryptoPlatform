import { Select } from "antd";
import i18n from "../../../i18next/i18n";

import styles from "./styles.module.scss";

const languages = [
  {
    value: "en",
    label: "En",
  },
];

export default function Nav() {
  const currentLanguage = localStorage.getItem("i18nextLng");

  const changeLang = lang => {
    i18n.changeLanguage(lang)
  }

  return (
    <Select
      className={styles.headerNav__options_select}
      defaultValue={currentLanguage}
      options={languages}
      onChange={changeLang}
    />
  );
}
