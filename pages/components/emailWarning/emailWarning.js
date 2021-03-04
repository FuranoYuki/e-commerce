import React from "react";
import styles from "./emailWarning.module.css";

const EmailWarning = () => {
  return (
    <div className={styles.emailWarning}>
      <div className={styles.emailWarning_header}>
        do you want to be aware of the best descount? then you are at the right
        place! let your e-mail here, we tell you :)
      </div>
      <div className={styles.emailWarning_field}>
        <input className={styles.field_input} />
        <button className={styles.field_button} type="button">
          cadastrar
        </button>
      </div>
      <div className={styles.field_privacy}>Privacy Political</div>
    </div>
  );
};

export default EmailWarning;
