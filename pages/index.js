import styles from "../styles/Home.module.css";
import Header from "../views/Header";
import Main from "../views/Main";
import Footer from "../views/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <Header />
        <Main />
        <Footer />

        <h5
          style={{
            textAlign: "center",
          }}
        >
          Created by Assirem @Dev
        </h5>
      </div>
    </div>
  );
}
