import React from "react";
import styles from "./cart.module.css";

const Cart = () => {
  return (
    <table className={styles.cart_table}>
      <tr className={styles.table_firstTR}>
        <th className={`${styles.table_th} ${styles.table_thFirst}`}>
          Product
        </th>
        <th className={styles.table_th}>qty</th>
        <th className={styles.table_th}>Delivery</th>
        <th className={styles.table_th}>Price</th>
      </tr>

      <tr className={styles.table_tr}>
        <td className={styles.tr_tdProduct}>
          <div className={styles.tdProduct_container}>
            <img
              src="/img/products/Processador AMD Ryzen 5 3600 Cache 32MB 3.6GHZ, AMD, 100-100000031BOX.jpg"
              alt="product"
              className={styles.tdProduct_img}
            />
            <div className={styles.tdProduct_name}>
              Processador AMD Ryzen 5 3600 Cache 32MB 3.6GHZ, AMD
            </div>
          </div>
        </td>
        <td className={styles.tr_tdProduct}>
          <div className={styles.tdProduct_container}>
            <div className={styles.tdProduct_qty}>
              <div className={styles.qty_change}>-</div>
              <input className={styles.qty_input} placeholder="1" />
              <div className={styles.qty_change}>+</div>
            </div>
          </div>
        </td>
        <td className={styles.tr_tdProduct}>
          <div className={styles.tdProduct_container}>
            <div className={styles.tr_tdProduct_delivery}>
              Entrega em 10 dias
            </div>
          </div>
        </td>
        <td className={styles.tr_tdProduct}>
          <div className={styles.tdProduct_container}>
            <div className={styles.tr_tdProduct_price}>R$ 200,00</div>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default Cart;
