import styles from "../styles/Featured.module.css";
import Image from "next/image";

import { useState } from "react";
const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt="arrow"
          fill
          sizes="80vw"
          style={{
            objectFit: "contain",
            
          }}
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              alt="pic"
              fill
              sizes="80vw"
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt="arrow"
          fill
          sizes="80vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default Featured;
