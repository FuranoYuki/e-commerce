import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import styles from "./productPrice.module.css";

const ProductPrice = () => {
  return (
    <div className={styles.productPrice}>
      <div className={styles.productPrice_price}>R$ 200,00</div>
      <div className={styles.productPrice_alternative}>
        others ways of payment
      </div>
      <div className={styles.productPrice_freight}>
        <div className={styles.freight_header}>
          Calculate freight and delivery time
        </div>
        <div className={styles.freight_calculate}>
          <input className={styles.calculate_input} />
          <button className={styles.calculate_button} type="button">
            Ok
          </button>
        </div>
      </div>
      <div className={styles.productPrice_buy}>
        <FontAwesomeIcon icon={faShoppingBasket} />
        <div className={styles.buy_text}>Comprar</div>
      </div>
    </div>
  );
};

export default ProductPrice;
