import { useRef, useState } from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import PictureMediaQuery from '../../PictureMediaQuery'

import lotteryLogo from '../../../assets/icons/lotteryLogo.svg'
import BgDefault from "../../../assets/images/main/slider/bg/1.png";
import Bg1x from "../../../assets/images/main/slider/bg/1.webp";
import Bg075x from "../../../assets/images/main/slider/bg/075.webp";
import Bg05x from "../../../assets/images/main/slider/bg/05.webp";
import CoinsDefault from "../../../assets/images/main/slider/1slide/1.png";
import Coins1x from "../../../assets/images/main/slider/1slide/1.webp";
import Coins075x from "../../../assets/images/main/slider/1slide/075.webp";
import Coins05x from "../../../assets/images/main/slider/1slide/05.webp";



import styles from "./styles.module.scss";
import sprite from "../../../assets/icons/sprite.svg";

export default function Testimonials() {
  const { t } = useTranslation();
  const carouselRef = useRef();

  return (
    <section className={styles.container}>
      <div className={styles.sliderWrapper}>
        <PictureMediaQuery
        ImgDefault={BgDefault}
        Img1x={Bg1x}
        Img075x={Bg075x}
        Img05x={Bg05x}
        className={styles.sliderWrapper_bg}
        width05={"(max-width: 786px)"}
        width075={"(max-width: 1300px)"}
        width1={"(max-width: 1400px)"}
      />
        <Carousel
          ref={carouselRef}
          className={styles.slider}
          touchMove={true}
          speed={500}>
          <div className={styles.slide}>
            <img
              className={styles.slide_logo}
              src={lotteryLogo}
              alt="Lottery Jackpot"
            />
            <h2 className={styles.slide_title}>$10,000</h2>
            <PictureMediaQuery
              ImgDefault={CoinsDefault}
              Img1x={Coins1x}
              Img075x={Coins075x}
              Img05x={Coins05x}
              className={styles.slide_imgCoins}
              width05={"(max-width: 786px)"}
              width075={"(max-width: 1300px)"}
              width1={"(max-width: 1400px)"}
            />
          </div>
          <div className={styles.slide}>
            <img
              className={styles.slide_logo}
              src={lotteryLogo}
              alt="Lottery Jackpot"
            />
            <h2 className={styles.slide_title}>$10,000</h2>
            <PictureMediaQuery
              ImgDefault={CoinsDefault}
              Img1x={Coins1x}
              Img075x={Coins075x}
              Img05x={Coins05x}
              className={styles.slide_imgCoins}
              width05={"(max-width: 786px)"}
              width075={"(max-width: 1300px)"}
              width1={"(max-width: 1400px)"}
            />
          </div>
        </Carousel>
        <svg
          className={styles.sliderWrapper_btnPrev}
          onClick={() => carouselRef.current.next()}
        >
            <use href={sprite + "#button-prev"}></use>
        </svg>
        <svg
          className={styles.sliderWrapper_btnNext}
          onClick={() => carouselRef.current.prev()}
        >
          <use href={sprite + "#button-next"}></use>
        </svg>
      </div>
    </section>
  );
}
