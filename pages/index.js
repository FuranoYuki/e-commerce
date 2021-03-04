import React from "react";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import MostSold from "./components/mostSold/mostSold";
import Footer from "./components/footer/footer";
import MiniAds from "./components/miniAds/miniAds";
import PlusAds from "./components/plusAds/plusAds";
import EmailWarning from "./components/emailWarning/emailWarning";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Carousel />
        <MiniAds />
        <MostSold />
        <MostSold />
        <EmailWarning />
        <PlusAds />
        <MostSold />
        <Footer />
      </main>
    </>
  );
}
