import React from "react";
import styles from "./mostSold.module.css";
import ProductSample from "../productSample/productSample";

const MostSold = () => {
  return (
    <div className={styles.mostSold}>
      <h1 className={styles.mostSold_header}>most sold products </h1>
      <div className={styles.mostSold_products}>
        <ProductSample img_src="/img/products/Monitor LG 19.5'' LED HD - HDMI, 2ms, Ajuste de Inclinação, Reader Mode, 4-Screen Split, 20MK400H-B.jpg" />
        <ProductSample img_src='/img/products/Monitor Philips 18.5" LED HDMI 193V5LHSB2 .jpg' />
        <ProductSample img_src="/img/products/PLACA DE VIDEO NVIDIA GEFORCE GTX 1660 OC DUAL-FAN GDDR5 6GB 192 BITS - GRAFFITI SERIES - PPOC166019206G5.jpg" />
        <ProductSample img_src="/img/products/Placa de video Powercolor radeon rx 550 4gb ddr5 128bits - axrx 550 4gbd5-dh .jpg" />
        {/* <ProductSample img_src="/img/products/Processador AMD Ryzen 5 3600 Cache 32MB 3.6GHZ, AMD, 100-100000031BOX.jpg" />
        <ProductSample img_src="/img/products/Processador Intel core i3-9100f 3.6Ghz 6MB lga1151, BX80684I39100F .jpg" /> */}
      </div>
    </div>
  );
};

export default MostSold;
