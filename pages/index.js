import styles from "../styles/Home.module.css";
import Header from "../views/Header";
import Main from "../views/Main";
import Footer from "../views/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <Header className={styles.header} />
        <Main className={styles.main} />
        <Footer className={styles.footer} />
      </div>
      <h5
        style={{
          textAlign: "right",
        }}
      >
        Created by{" "}
        <b>
          {" "}
          <a
            style={{ color: "#E89005" }}
            href="https://portfolio-assirem-dev.netlify.app/"
            target="_blank"
          >
            {" "}
            Assirem@Dev
          </a>
        </b>
      </h5>
    </div>
  );
}
