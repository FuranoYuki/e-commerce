import React from "react";
import styles from "./product.module.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ProductInfo from "../components/productInfo/productInfo";
import ProductPrice from "../components/productPrice/productPrice";
import MostSold from "../components/mostSold/mostSold";
import ProductSpecification from "../components/productSpecification/productSpecification";

const Product = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.product_products}>
        <ProductInfo />
        <ProductPrice />
      </div>
      <MostSold />
      <ProductSpecification />
      <MostSold />
      <Footer />
    </main>
  );
};

export default Product;
