/*
rfc
props: images
state: currentImgId 0
setPrevSlide()
setNextSlide()
*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import Controller from "./Controller";
import styles from "./Slider.module.scss";
import Slide from "./Slide";
import { images } from "./SliderData";

export default function Slider() {
  const [currentImgId, setCurrentImgId] = useState(0);

  const setPrevSlide = () => {
    currentImgId == 0
      ? setCurrentImgId(images.length - 1)
      : setCurrentImgId(currentImgId - 1);
  };
  const setNextSlide = () => {
    currentImgId == images.length - 1
      ? setCurrentImgId(0)
      : setCurrentImgId(currentImgId + 1);
  };
  return (
    <div className={styles.mainContainer}>
      <Slide images={images} currentImgId={currentImgId} />
      <Controller setPrevSlide={setPrevSlide} setNextSlide={setNextSlide} />
    </div>
  );
}


