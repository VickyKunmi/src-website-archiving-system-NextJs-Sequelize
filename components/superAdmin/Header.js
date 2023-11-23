import styles from "../../styles/admin/Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <h4>Project Jugler</h4>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>
            Hello, <span>Super Admin</span>
          </h2>
          <p>Welcome on board Admin</p>
        </div>
      </div>
    </div>
  );
};
