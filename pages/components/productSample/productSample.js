import React from "react";
import styles from "./productSample.module.css";

const ProductSample = ({ img_src }) => {
  return (
    <div className={styles.productSample}>
      <img className={styles.productSample_img} src={img_src} alt="product" />
      <p className={styles.productSample_body}>
        Monitor LG 19.5&apos;&apos; LED HD - HDMI, 2ms, Ajuste de Inclinação,
        Reader Mode, 4-Screen Split, 20MK400H-B
      </p>
      <button className={styles.productSample_button} type="button">
        Comprar
      </button>
      <div className={styles.productSample_price}>R$ 220,00</div>
      <div className={styles.productSample_discount}>
        12x de R$120, SE JUROES
      </div>
    </div>
  );
};

export default ProductSample;
