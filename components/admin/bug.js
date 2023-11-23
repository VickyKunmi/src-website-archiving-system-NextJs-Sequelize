import styles from "../../styles/admin/Success.module.css";
import { BiCheck } from "react-icons/bi";
export default function Bug({ message }) {
  return (
    <div className={styles.Bug}>
      <div className={styles.sucText}>
        {message}
        <BiCheck className={styles.icon}></BiCheck>
      </div>
    </div>
  );
}
