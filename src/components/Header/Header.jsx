import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

import PictureMediaQuery from "../PictureMediaQuery";
import Nav from "./Nav/Nav";
import Select from "./Select/Select";
import Lottery from "./Lottery/Lottery";
import MetaMask from "../../util/metamask/MetaMask";

import ImgDefault from "../../assets/images/header/bg/1.png";
import Img1x from "../../assets/images/header/bg/1.webp";
import Img075x from "../../assets/images/header/bg/075.webp";
import Img05x from "../../assets/images/header/bg/05.webp";
import logo from '../../assets/icons/logo.svg';
import styles from "./styles.module.scss";

export default function Header() {
  const { t } = useTranslation();
  const [active, setActive] = useState(true);

  const isOpenBurger = () => {
    if(active){
      document.getElementById('root').style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    }else{
      document.getElementById('root').style.overflow = "auto"
      document.body.style.overflow = "auto"
    }
    setActive(!active);
  };

  return (
    <section className={styles.container}>
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
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.header_logo} src={logo} alt="logo" />
          <div className={styles.header_navigation}>
            <Nav active={active}/>
            <div className={styles.header_options}>
              <Select />
              <MetaMask styles={styles.header_options_btn} />
            </div>
          </div>
        </div>
        <div className={styles.header_lottery}>
          <Lottery />
        </div>
        <div className={styles.header_wrapperBurgerMenu} onClick={isOpenBurger}>
          <div
            className={
              active ? styles.header_burgerMenu : styles.header_burgerMenuActive
            }></div>
        </div>
      </div>
    </section>
  );
}
