import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_social}>
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faTwitterSquare} />
        <FontAwesomeIcon icon={faInstagramSquare} />
      </div>
      <div className={styles.createdBy}>
        by Prando | matheus.a.prando@gmail.com
      </div>
    </div>
  );
};

export default Footer;
