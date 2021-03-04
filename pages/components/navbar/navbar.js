import React, { useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollyFlatbed,
  faUser,
  faBars,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";
import Navsidebar from "../navsidebar/navsidebar";

const Navbar = () => {
  const user = useRef(null);
  const cart = useRef(null);
  const userInfo = useRef(null);
  const userText = useRef(null);

  const openSidebar = () => {
    document.querySelector(".navsidebar").style.display = "flex";
  };

  const openInfo = () => {
    if (userInfo.current.style.display === "flex") {
      userInfo.current.style.display = "none";
      userText.current.style.textDecoration = "none";
      user.current.style.backgroundColor = "transparent";
    } else {
      userInfo.current.style.display = "flex";
      userText.current.style.textDecoration = "underline";
      user.current.style.backgroundColor = "darkred";
      cart.current.style.display = "none";
    }
  };

  const openCart = () => {
    if (cart.current.style.display === "flex") {
      cart.current.style.display = "none";
    } else {
      cart.current.style.display = "flex";
    }
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_top}>
          <div className={styles.nav_responsive}>
            <FontAwesomeIcon icon={faBars} onClick={openSidebar} />
            <div className={styles.brand}>SomeBrand</div>
          </div>

          <div className={styles.div_search}>
            <input
              className={styles.search_input}
              placeholder="search here a product"
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>

          <ul className={styles.nav_ul_icons}>
            <li
              className={styles.user}
              onClick={openInfo}
              onKeyDown={openInfo}
              role="presentation"
              ref={user}
            >
              <div className={styles.user_icon}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={styles.user_text} ref={userText}>
                Hi, Do it your log in or make an account
              </div>
              <div className={styles.user_info} ref={userInfo}>
                <div className={styles.info_header}>
                  to see your orders and have a custom experience,
                  <br />
                  log in your account :`)`
                </div>
                <Link href="/login">
                  <a className={styles.info_enter}>enter</a>
                </Link>
                <Link href="/login">
                  <a className={styles.info_register}>
                    new costumer ? register
                  </a>
                </Link>
              </div>
            </li>
            <li className={styles.heart}>
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li
              className={styles.shopping_cart}
              onClick={openCart}
              onKeyDown={openCart}
              role="presentation"
            >
              <FontAwesomeIcon icon={faDollyFlatbed} />
              <div className={styles.cart_number}>0</div>
              <div className={styles.cartModal} ref={cart}>
                your cart is empty
              </div>
            </li>
          </ul>
        </div>
        <ul className={styles.list}>
          <li className={styles.li}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/product/lala">
              <a>Products</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/shoppingCart">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Navsidebar />
    </>
  );
};

export default Navbar;
