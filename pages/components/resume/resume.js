import React from "react";
import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resume}>
      <div className={styles.resume_header}>Resume order</div>
      <div className={styles.resume_bill}>
        <div className={styles.bill_price}>
          <div className={styles.price_header}>2 products</div>
          <div className={styles.price_value}>R$ 200,00</div>
        </div>
        <div className={styles.bill_price}>
          <div className={styles.price_header}>Freight</div>
          <div className={styles.price_value}>R$ 10,00</div>
        </div>
      </div>
      <div className={styles.resume_total}>
        <div className={styles.total_header}>Total</div>
        <div className={styles.total_value}>R$ 210,00</div>
      </div>
      <div className={styles.resume_interest}>up to 12x with no interest</div>
      <button className={styles.resume_button} type="button">
        Continue
      </button>
      <div className={styles.resume_reminder}>
        Possui cupom ou vale? Você poderá usá-los na etapa de pagamento.
      </div>
    </div>
  );
};

export default Resume;
