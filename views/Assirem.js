import React from "react";
import styles from "../styles/Home.module.css";

function Assirem() {
  return (
    <assirem className={styles.assirem}>
      <h5>
        Created by{" "}
        <b>
          {" "}
          <a
            href="https://portfolio-assirem-dev.netlify.app/"
            target="_blank"
          >
            {" "}
            Assirem@Dev
          </a>
        </b>
      </h5>
    </assirem>
  );
}

export default Assirem;