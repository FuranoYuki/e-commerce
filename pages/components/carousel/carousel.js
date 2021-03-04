import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./carousel.module.css";

const Carousel = () => {
  const image = useRef(null);
  const [chosen, setchosen] = useState("image1");

  const changeImage = (event) => {
    if (event.currentTarget.id === "button_left") {
      switch (chosen) {
        case "image1":
          setchosen("image3");
          break;
        case "image2":
          setchosen("image1");
          break;
        case "image3":
          setchosen("image2");
          break;
        default:
          break;
      }
    } else {
      switch (chosen) {
        case "image1":
          setchosen("image2");
          break;
        case "image2":
          setchosen("image3");
          break;
        case "image3":
          setchosen("image1");
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const mark1 = document.querySelector("#mark-1");
    const mark2 = document.querySelector("#mark-2");
    const mark3 = document.querySelector("#mark-3");

    mark1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    mark2.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    mark3.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    switch (chosen) {
      case "image1":
        image.current.style.marginLeft = "0";
        mark1.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        break;
      case "image2":
        image.current.style.marginLeft = "-100%";
        mark2.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        break;
      case "image3":
        image.current.style.marginLeft = "-200%";
        mark3.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        break;
      default:
        break;
    }
  }, [chosen]);

  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector("#button_right").click();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.carousel_controller}>
          <div
            className={styles.carousel_button}
            onClick={changeImage}
            onKeyDown={changeImage}
            role="button"
            tabIndex={0}
            id="button_left"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className={styles.carousel_button}
            onClick={changeImage}
            onKeyDown={changeImage}
            role="button"
            tabIndex={0}
            id="button_right"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <img
          className={`${styles.carousel_img} ${styles.img_lidear}`}
          src="/img/carrouselAds/carrouselAds1.webp"
          ref={image}
          alt="carousel first element 1"
        />
        <img
          className={styles.carousel_img}
          src="/img/carrouselAds/carrouselAds2.webp"
          alt="carousel first element 2"
        />
        <img
          className={styles.carousel_img}
          src="/img/carrouselAds/carrouselAds3.webp"
          alt="carousel first element 3"
        />
      </div>
      <div className={styles.carousel_mark}>
        <div className={styles.mark_field} id="mark-1" />
        <div className={styles.mark_field} id="mark-2" />
        <div className={styles.mark_field} id="mark-3" />
      </div>
    </>
  );
};

export default Carousel;
