import styles from "../../styles/admin/Success.module.css";
import { BiCheck } from "react-icons/bi";

export function Success({ message }) {
  return (
    <div className={styles.success}>
      <div className={styles.sucText}>
        {message}
        <BiCheck className={styles.icon}></BiCheck>
      </div>
    </div>
  );
}
