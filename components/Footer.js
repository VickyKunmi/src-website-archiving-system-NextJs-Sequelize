import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg.jpg"
          alt="pic"
          fill
          sizes="80vw"
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>SRC motto goes here!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Join us here in CUG</h1>
          <p className={styles.text}>
            Catholic University of Ghana
            <br /> P.o box 1706, Fiapre, Sunyani
            <br /> 02064030385
          </p>
          <br />
          <p className={styles.text}>
            Student Representative council
            <br /> GF 2b, Fiapre, Sunyani
            <br /> 0302199404
          </p>
          <br />
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 8:00 - 19:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 10:00 - 19:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
