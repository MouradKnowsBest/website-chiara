import React from "react";
import styles from "../styles/Home.module.css";

function Header() {

  return (
    <div>
      <title>Align With Chiara</title>
      <meta name="description" content="Align With Chiara" />
      <h2 style={{ marginBottom: "80px" }} className={styles.title}>
        Align With{" "}
        <b>
          {" "}
          <a href="https://www.instagram.com/alignwithchiara/?hl=fr"
          >
            {" "}
            Chiara!
          </a>
        </b>
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div>
          <div style={{ width: "550px" }}>
            <h3>HOLISTIC HEALTH & WELLNESS COACH</h3>
            <p style={{ fontSize: "60px" }}>
              HELPING YOU TO DISCOVER HOW TO LIVE YOUR BEST LIFE
            </p>

            <form action="https://www.instagram.com/alignwithchiara/?hl=fr" target="_blank">
              <input
                style={{
                  backgroundColor: "black",
                  color: "#F1EAE4",
                  padding: "15px",
                  margin: "10px",
                }}
                type="submit"
                value="EXPLORE"
              />
            </form>

          </div>
        </div>

        <img
          style={{ height: "510px" }}
          src="./chiara-portrait.png"
          alt="chiara-portrait"
        ></img>
      </div>

      <p
        style={{
          marginTop: "120px",
          textAlign: "center",
          textIndent: 15,
          textAlign: "justify",
          margin: "auto",
        }}
      >
        Creating a life you love takes a willingness to dig under the surface of
        who you are and reveal what it is you want for your life. Having a coach
        to support, challenge and motivate you can make the sometimes daunting
        task of discovery one that is easier, and feel more do-able. In this
        one-hour introductory coaching call you will discover what health
        coaching is and how it can be used to help you reach your health and
        lifestyle goals. We will talk about your wellness needs and goals. You
        will receive advice on where you could start in reaching those goals,
        and what, if any, coaching package is right for you.
      </p>
    </div>
  );
}

export default Header;
