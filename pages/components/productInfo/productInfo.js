import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./productInfo.module.css";

const ProductInfo = () => {
  return (
    <div className={styles.productInfo}>
      <div className={styles.productInfo_information}>
        <div className={styles.information_social}>
          <div className={styles.social_icon}>
            <FontAwesomeIcon icon={faHeart} />
            <div className={styles.icon_header}>Favoritar</div>
          </div>
          <div className={styles.social_icon}>
            <FontAwesomeIcon icon={faShareAlt} />
            <div className={styles.icon_header}>Compartilhar</div>
          </div>
        </div>
        <img
          src="/img/products/Processador AMD Ryzen 5 3600 Cache 32MB 3.6GHZ, AMD, 100-100000031BOX.jpg"
          className={styles.information_img}
          alt="product"
        />
      </div>
      <div className={styles.productInfo_text}>
        <div className={styles.text_header}>
          Guarda Sol Gigante Praia Piscina Pesca Oxford Dobravel 2 M - Ilhabela
        </div>
        <p className={styles.text_body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className={styles.text_links}>
          <span>Mais Informações</span>
          <span>Conheça nossa política de troca</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
