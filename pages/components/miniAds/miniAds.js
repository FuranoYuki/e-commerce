import React from "react";
import styles from "./miniAds.module.css";

const miniAds = () => {
  return (
    <div className={styles.miniAds}>
      <img
        className={styles.miniAds_img}
        src="/img/miniAds/miniAds.webp"
        alt="miniAds"
      />
    </div>
  );
};

export default miniAds;
