import React from "react";
import styles from "./productSpecification.module.css";

const ProductSpecification = () => {
  return (
    <div className={styles.prodSpec}>
      <div className={styles.productInformation}>
        <div className={styles.productInformation_header}>
          Product Information
        </div>
        <img
          src="/img/productInfo/productInfo.webp"
          alt="productInfo"
          className={styles.productInfo_img}
        />
      </div>
      <div className={styles.productTable}>
        <div className={styles.prodSpec_header}>product Specification</div>
        <table className={styles.prodSpec_table}>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
          <tr className={styles.table_tr}>
            <td className={styles.tr_field}>color</td>
            <td className={styles.tr_value}>red</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductSpecification;
