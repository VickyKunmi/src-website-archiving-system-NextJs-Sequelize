import styles from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Who We Are</h1>
      <p className={styles.describe}>
        The Students’ Representative Council (SRC) is the legitimate
        representative organ of the Student body, and it is the only recognized
        mouthpiece of the student body. It is a member of The Ghana National
        Union of Technical Students (GNUTS). The aims of the SRC, among others,
        are; To seek the general welfare of the students and to advise in
        relation to such matters concerning students welfare. To work in all
        deliberations and in close harmony, with the authorities of the
        University in all matters affecting the interests of the students. To
        organize lectures, symposia, debates, voluntary work and other social
        activities in the interest of the students.
      </p>
      <div>
        <h1 className={styles.title}>Know more about CUG</h1>
      </div>
    </div>
  );
};

export default Intro;
