import React from "react";
import styles from "./plusAds.module.css";

const plusAds = () => {
  return (
    <div className={styles.plusAds}>
      <img
        src="/img/plusAds/plus1.webp"
        alt="plus ads 1"
        className={styles.plusAds_img}
      />
      <img
        src="/img/plusAds/plus2.webp"
        alt="plus ads 2"
        className={styles.plusAds_img}
      />
      <img
        src="/img/plusAds/plus3.webp"
        alt="plus ads 3"
        className={styles.plusAds_img}
      />
      <img
        src="/img/plusAds/plus4.webp"
        alt="plus ads 4"
        className={styles.plusAds_img}
      />
    </div>
  );
};

export default plusAds;
