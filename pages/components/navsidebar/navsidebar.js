import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./navsidebar.module.css";

const Navsidebar = () => {
  const sidebar = useRef(null);
  const products = useRef(null);
  const optionIcon = useRef(null);

  const handlerProducts = () => {
    if (products.current.style.display === "flex") {
      products.current.style.display = "none";
      optionIcon.current.lastElementChild.style.transform = "rotate(360deg)";
    } else {
      products.current.style.display = "flex";
      optionIcon.current.lastElementChild.style.transform = "rotate(-180deg)";
    }
  };

  const closeSidebar = () => {
    sidebar.current.style.display = "none";
  };

  const outNav = (event) => {
    if (event.target === event.currentTarget) {
      closeSidebar();
    }
  };

  return (
    <div
      className={`${styles.sidebar} navsidebar`}
      ref={sidebar}
      onClick={outNav}
      onKeyDown={outNav}
      role="presentation"
    >
      <div className={styles.sidebar_main}>
        <div className={styles.main_header}>
          <div className={styles.header_brand}>SomeBrand</div>
          <FontAwesomeIcon icon={faTimes} onClick={closeSidebar} />
        </div>
        <ul className={styles.main_list}>
          <li className={styles.main_li}>Home</li>
          <li className={`${styles.main_li} ${styles.main_li_products}`}>
            <div
              className={styles.li_products}
              onClick={handlerProducts}
              onKeyDown={handlerProducts}
              role="presentation"
              ref={optionIcon}
            >
              <div className={styles.products_header}>Computers</div>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className={styles.products_options} ref={products}>
              <div className={styles.products_option}>monitor</div>
              <div className={styles.products_option}>placa de video</div>
              <div className={styles.products_option}>processador</div>
            </div>
          </li>
          <li className={styles.main_li}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navsidebar;
