import React from "react";
import Cart from "./components/cart/cart";
import Resume from "./components/resume/resume";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import styles from "../styles/shoppingCart.module.css";

const ShoppingCart = () => {
  return (
    <div className={styles.shoppingCart}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.shopping_header}>My shopping cart</div>
        <div className={styles.cart}>
          <Cart />
          <Resume />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
